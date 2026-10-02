import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('[ErrorBoundary] Caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          position: 'fixed', inset: 0, background: '#050608',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontFamily: 'monospace', padding: '2rem', zIndex: 9999
        }}>
          <h1 style={{ color: '#f87171', marginBottom: '1rem' }}>Runtime Error</h1>
          <pre style={{
            background: '#111', padding: '1rem', borderRadius: '8px',
            maxWidth: '800px', overflow: 'auto', fontSize: '0.75rem', color: '#fca5a5'
          }}>
            {this.state.error?.toString()}
            {'\n\n'}
            {this.state.errorInfo?.componentStack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
