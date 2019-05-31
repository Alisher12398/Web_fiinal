from django.urls import path
from api.views import fbv,gcbv

urlpatterns = [
    # fbv
    path('products/', gcbv.ProductList.as_view()),
    path('products/<int:pk>/', gcbv.ProductDetail.as_view()),
]