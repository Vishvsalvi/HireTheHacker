import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Brain, Users, Clock, BarChart, FileText } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Features that <span className="text-blue-600">Revolutionize</span> Hiring
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform transforms how you screen and evaluate technical talent, saving time and helping
              you find the best candidates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">AI-Powered Screening</h2>
              <p className="text-gray-600 mb-8">
                Traditional ATS systems use basic keyword matching that filters out qualified candidates. Our AI
                understands context, skills, and potential to find the best talent.
              </p>

              <ul className="space-y-4">
                <FeatureItem icon={Brain}>
                  <strong>Contextual Understanding</strong> - Our AI comprehends skills and experience beyond simple
                  keyword matching
                </FeatureItem>
                <FeatureItem icon={Zap}>
                  <strong>Exceptional Ability Detection</strong> - Identifies unique strengths and capabilities that set
                  candidates apart
                </FeatureItem>
                <FeatureItem icon={Shield}>
                  <strong>Bias Reduction</strong> - Focuses on relevant skills and experience, not demographic
                  information
                </FeatureItem>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-xl bg-blue-200 transform rotate-3"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-xl bg-blue-300 transform -rotate-3"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="AI Screening Dashboard"
                  className="rounded-lg border border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features for Modern Recruiting</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform is designed to streamline your hiring process and help you find the best candidates faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Clock}
              title="Time-Saving Automation"
              description="Screen hundreds of resumes in minutes instead of days, freeing up your team to focus on high-value activities."
            />

            <FeatureCard
              icon={Users}
              title="Team Collaboration"
              description="Invite team members, share candidate profiles, and collaborate on hiring decisions in real-time."
            />

            <FeatureCard
              icon={BarChart}
              title="Insightful Analytics"
              description="Track key metrics and gain insights into your hiring process with detailed analytics and reporting."
            />

            <FeatureCard
              icon={FileText}
              title="Bulk Resume Processing"
              description="Upload multiple resumes at once or connect to your existing ATS to import candidates seamlessly."
            />

            <FeatureCard
              icon={Shield}
              title="Diversity & Inclusion"
              description="Our AI focuses on skills and experience, helping you build diverse, high-performing teams."
            />

            <FeatureCard
              icon={Zap}
              title="Exceptional Talent Identification"
              description="Discover candidates with unique abilities and exceptional potential that traditional systems miss."
            />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose ResumeAI?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our AI-powered platform compares to traditional ATS systems.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-left py-3 px-4">Traditional ATS</th>
                  <th className="text-left py-3 px-4">ResumeAI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Resume Screening</td>
                  <td className="py-3 px-4">Basic keyword matching</td>
                  <td className="py-3 px-4">AI-powered contextual understanding</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Processing Time</td>
                  <td className="py-3 px-4">Hours to days</td>
                  <td className="py-3 px-4">Minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Candidate Quality</td>
                  <td className="py-3 px-4">Often misses qualified candidates</td>
                  <td className="py-3 px-4">Identifies best-fit candidates with 92% accuracy</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Bias Reduction</td>
                  <td className="py-3 px-4">Limited</td>
                  <td className="py-3 px-4">Advanced AI algorithms to reduce unconscious bias</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Exceptional Ability Detection</td>
                  <td className="py-3 px-4">None</td>
                  <td className="py-3 px-4">Identifies unique strengths and potential</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your hiring process?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join hundreds of companies using our AI to find the best tech talent faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg" variant="secondary" className="px-8">
                Sign Up Free
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 px-8"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 ResumeAI. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                Twitter
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureItem({ icon: Icon, children }) {
  return (
    <li className="flex items-start">
      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
        <Icon className="h-3.5 w-3.5 text-blue-600" />
      </div>
      <span className="text-gray-600">{children}</span>
    </li>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

