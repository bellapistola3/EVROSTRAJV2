export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">EVROSTRAJV2</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started with Speed Insights</h2>
          
          <div className="space-y-4">
            <p>
              This application has Vercel Speed Insights enabled to track performance metrics.
            </p>
            
            <section>
              <h3 className="text-xl font-semibold mb-2">What&apos;s Included</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Next.js 14 with TypeScript</li>
                <li>Vercel Speed Insights integration</li>
                <li>ESLint configuration</li>
                <li>Responsive design support</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-2">Next Steps</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Deploy your app to Vercel</li>
                <li>Navigate to your project&apos;s Speed Insights tab</li>
                <li>Wait for users to visit your site</li>
                <li>View performance metrics in the dashboard</li>
              </ol>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-2">Learn More</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a 
                    href="https://vercel.com/docs/speed-insights" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Speed Insights Documentation
                  </a>
                </li>
                <li>
                  <a 
                    href="https://nextjs.org/docs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Next.js Documentation
                  </a>
                </li>
                <li>
                  <a 
                    href="https://vercel.com/docs/speed-insights/privacy-policy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Privacy & Compliance
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
