use axum::{
    routing::get,
    Router
};

#[tokio::main]
async fn main() {
    let app = Router::new().route("/", get(|| async {
        // sleep 2s
        tokio::time::sleep(std::time::Duration::from_secs(2)).await;
        
        "This is Demo Data"
    }));

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();

    axum::serve(listener, app).await.unwrap();
}
