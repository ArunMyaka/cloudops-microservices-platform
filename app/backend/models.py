from sqlalchemy import Boolean, Column, Integer, String

from database import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(160), nullable=False)
    completed = Column(Boolean, nullable=False, default=False)

