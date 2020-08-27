export const renderCards = () => {

    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-header">Currency in USD</div>
                <div className="card-body">
                    <div className="col-12 px-0">
                        <div className="row">
                            <div className="col-md-6">
                                <p style={{ fontSize: '0.875rem' }} className="mb-1 text-dark font-weight-bold">Open:</p>
                            </div>
                            <div className="col-md-6 text-right">
                                <p style={{ fontSize: '0.875rem' }} className="mb-1 text-muted">3,449.97</p>
                            </div>
                            <div className="col-md-6">
                                <p style={{ fontSize: '0.875rem' }} className="mb-1 text-dark font-weight-bold">High:</p>
                            </div>
                            <div className="col-md-6 text-right">
                                <p style={{ fontSize: '0.875rem' }} className="mb-1 text-success">3,481.07</p>
                            </div>
                            <div className="col-md-6">
                                <p style={{ fontSize: '0.875rem' }} className="mb-1 text-dark font-weight-bold">Low:</p>
                            </div>
                            <div className="col-md-6 text-right">
                                <p style={{ fontSize: '0.875rem' }} className="mb-1 text-danger">3,444.15</p>
                            </div>
                            <div className="col-md-6">
                                <p style={{ fontSize: '0.875rem' }} className="mb-1 text-dark font-weight-bold">Close:</p>
                            </div>
                            <div className="col-md-6 text-right">
                                <p style={{ fontSize: '0.875rem' }} className="mb-1 text-muted">3,478.73</p>
                            </div>
                            <div className="col-md-6">
                                <p style={{ fontSize: '0.875rem' }} className="mb-1 text-dark font-weight-bold">Volume:</p>
                            </div>
                            <div className="col-md-6 text-right">
                                <p style={{ fontSize: '0.875rem' }} className="mb-1 text-muted">1,988,192,168</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    <p className="mb-1 text-right"><small>Aug 26, 2020</small></p>
                </div>
            </div>
        </div>
    )
}