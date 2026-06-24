from fastapi.testclient import TestClient

from main import app


client = TestClient(app)


def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_create_and_list_task():
    create_response = client.post("/tasks", json={"title": "Ship DevOps project"})
    assert create_response.status_code == 201
    task = create_response.json()
    assert task["title"] == "Ship DevOps project"
    assert task["completed"] is False

    list_response = client.get("/tasks")
    assert list_response.status_code == 200
    assert any(item["id"] == task["id"] for item in list_response.json())

