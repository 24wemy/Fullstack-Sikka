from flask import jsonify, request
from config.settings import logger
from models.profile import get_default_profile
from services.database import get_supabase_client

def init_auth_routes(app):
    @app.route('/', methods=['POST'])
    def login():
        try:
            # Validate incoming data
            data = request.get_json()
            if not data:
                return jsonify({'message': 'No input data provided'}), 400
            
            username = data.get('username')
            password = data.get('password')

            # Validate username and password
            if not username or not password:
                return jsonify({'message': 'Username dan Password diperlukan'}), 400

            supabase = get_supabase_client()

            # Fetch user from Supabase using username
            user_response = supabase.table('users').select('*').eq('username', username).execute()
            
            # Check if user exists
            if not user_response.data:
                logger.warning(f'Login attempt with non-existent username: {username}')
                return jsonify({'message': 'Invalid credentials'}), 401
            
            user_data = user_response.data[0]

            # Verify password 
            if password != user_data.get('password'):
                logger.warning(f'Failed login attempt for username: {username}')
                return jsonify({'message': 'Invalid credentials'}), 401

            # Retrieve profile data
            profile_response = supabase.table('profiles').select('*').eq('user_id', user_data['id']).execute()
            
            # Use default profile if no profile exists
            profile_data = profile_response.data[0] if profile_response.data else get_default_profile()
            profile_data['user_id'] = user_data['id']

            # Construct user response
            user_response = {
                'message': 'Login successful',
                'user': {
                    'id': user_data['id'],
                    'username': user_data['username'],
                    **{k: profile_data.get(k, 'Belum diisi') for k in get_default_profile().keys() if k != 'user_id'}
                }
            }

            logger.info(f'Successful login for username: {username}')
            return jsonify(user_response), 200

        except Exception as e:
            logger.error(f'Login error: {str(e)}')
            return jsonify({'message': 'Internal server error', 'error': str(e)}), 500

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({'message': 'Not found'}), 404

    @app.errorhandler(500)
    def server_error(error):
        return jsonify({'message': 'Internal server error'}), 500