# CRUD-generator

### repository pattern

service layer와 data source layer 사이에서 중재자 역할을 한다.

service layer는 db와 직접 접근하지 않고 repository와 연결하여 db와 소통한다.

서비스 로직에서 db 접근을 신경쓰지않고 오로지 비즈니스 로직에만 집중할 수 있다.
