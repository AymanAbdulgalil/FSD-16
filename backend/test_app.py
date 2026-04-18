import pytest
from app import app


@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_health(client):
    res = client.get('/api/health')
    assert res.status_code == 200
    assert res.get_json()['status'] == 'ok'

def test_login_success(client):
    res = client.post('/api/login', json={'username': 'admin', 'password': 'secret'})
    assert res.status_code == 200
    assert 'token' in res.get_json()

def test_login_fail(client):
    res = client.post('/api/login', json={'username': 'wrong', 'password': 'wrong'})
    assert res.status_code == 401