from django.urls import path
from .views import CreateNoteList, DeleteNote

urlpatterns = [
    path('notes/', CreateNoteList.as_view(), name="notes"),
    path('notes/delete/<int:pk>/', DeleteNote.as_view(), name="delete-note"),
]
