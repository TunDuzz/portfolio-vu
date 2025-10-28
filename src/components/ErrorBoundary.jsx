import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("❌ Error caught by ErrorBoundary:", error);
    console.error("📋 Error Info:", errorInfo);
    console.error("🔍 Component Stack:", errorInfo.componentStack);
    
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-primary p-8">
          <div className="bg-tertiary rounded-2xl p-8 max-w-2xl w-full border border-red-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">⚠️</div>
              <h2 className="text-white text-2xl font-bold">Đã xảy ra lỗi</h2>
            </div>
            
            <p className="text-secondary mb-6">
              Đã có lỗi xảy ra khi render component. Vui lòng kiểm tra console để xem chi tiết.
            </p>

            <div className="bg-black/40 rounded-xl p-4 mb-4 overflow-auto max-h-96">
              <h3 className="text-red-400 font-semibold mb-2">Error Message:</h3>
              <pre className="text-red-300 text-sm whitespace-pre-wrap">
                {this.state.error?.toString()}
              </pre>
            </div>

            {this.state.errorInfo && (
              <div className="bg-black/40 rounded-xl p-4 overflow-auto max-h-96">
                <h3 className="text-yellow-400 font-semibold mb-2">Component Stack:</h3>
                <pre className="text-yellow-300 text-xs whitespace-pre-wrap">
                  {this.state.errorInfo.componentStack}
                </pre>
              </div>
            )}

            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 bg-[#915EFF] hover:bg-[#7c4fdf] text-white font-semibold rounded-xl transition-colors"
            >
              Tải lại trang
            </button>

            <button
              onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
              className="mt-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors"
            >
              Thử lại
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

