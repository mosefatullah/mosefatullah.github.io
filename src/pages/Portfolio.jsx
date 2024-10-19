import PortfolioPDF from '../assets/Portfolio.pdf'

function Portfolio() {
    return (
        <div className="__portfolio min-h-[70vh] mb-9 lg:mb-16">
            <div className="flex flex-col items-center justify-center mt-7">
                <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-white">
                    Portfolio
                </h1>
            </div>
            <div className="mt-12 bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl max-w-3xl mx-auto">
                <object data={PortfolioPDF} type="application/pdf" width="100%" height="800px"></object>
            </div>
        </div>
    )
}

export default Portfolio