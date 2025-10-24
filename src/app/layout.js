import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Gandham Mani Saketh | AI/ML Engineer',
  description: 'Portfolio of Gandham Mani Saketh - AI/ML Engineer, Full-Stack Developer, and Researcher. Co-founder of InnodayVoyagers-AI Hub.',
  keywords: 'AI, Machine Learning, Full-Stack Developer, Python, Flask, LangChain, Gemini AI',
  authors: [{ name: 'Gandham Mani Saketh' }],
  openGraph: {
    title: 'Gandham Mani Saketh | AI/ML Engineer',
    description: 'Portfolio showcasing AI/ML projects, research publications, and full-stack development work.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Voiceflow Chat Widget */}
        <Script
          id="voiceflow-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '68fb90bb3eaf204639b437d4' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                      url: "https://runtime-api.voiceflow.com"
                    }
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
                v.type = "text/javascript"; 
                s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `,
          }}
        />
      </body>
    </html>
  );
}