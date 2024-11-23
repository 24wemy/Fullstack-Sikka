from config.settings import app
from routes.auth import init_auth_routes

def create_app():
    """Initialize and return the Flask application."""
    init_auth_routes(app)
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0', port=5000)