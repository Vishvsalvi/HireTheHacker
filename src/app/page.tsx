import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Search,
  Shield,
  Zap,
  Brain,
  Users,
  Clock,
  BarChart,
  FileText,
  GraduationCap,
  Code,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
    
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-2">
                AI-Powered Talent Matching
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hire for <span className="text-blue-600">skills</span>, not just degrees
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Our AI screening engine analyzes resumes with precision, identifying true talent based on demonstrated
                skills and abilities, not just credentials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="px-8 bg-blue-700 hover:bg-blue-600 text-white">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/pricing">
                  <Button variant="outline" size="lg">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full rounded-xl bg-blue-200 transform rotate-3"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full rounded-xl bg-blue-300 transform -rotate-3"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="ml-auto text-sm text-gray-500">AI Resume Screener</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-100 rounded-md w-3/4"></div>
                    <div className="h-32 bg-gray-100 rounded-md"></div>
                    <div className="flex gap-3">
                      <div className="h-10 bg-blue-500 rounded-md w-1/3"></div>
                      <div className="h-10 bg-gray-200 rounded-md w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Problem with Traditional Hiring</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Traditional resume screening misses exceptional talent and reinforces bias
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-6">
                <div className="flex items-start mb-4">
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                    <GraduationCap className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Degree-Based Filtering</h3>
                    <p className="text-gray-600">
                      Traditional ATS systems filter candidates based on degrees and keywords, missing self-taught
                      talent with exceptional skills
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                    <Code className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Keyword Matching Fails</h3>
                    <p className="text-gray-600">
                      75% of qualified candidates are rejected by traditional ATS systems due to rigid keyword matching
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-start mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <Brain className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our AI Solution</h3>
                    <p className="text-gray-600">
                      ResumeAI understands context and identifies exceptional abilities that traditional systems miss
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Skill-Based Hiring</h3>
                    <p className="text-gray-600">
                      Our platform focuses on demonstrated skills and abilities, not just credentials, helping you build
                      diverse, high-performing teams
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform uses advanced AI to match the right candidates to your job requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Screening</h3>
              <p className="text-gray-600">
                Upload resumes and job requirements. Our AI analyzes and ranks candidates based on match quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Skill Analysis</h3>
              <p className="text-gray-600">
                Automatically extract and evaluate technical skills, experience levels, and project history.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bias Prevention</h3>
              <p className="text-gray-600">
                Our AI focuses on skills and experience, helping you build diverse, high-performing teams.
              </p>
            </div>
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

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Hiring Teams</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our customers have to say about our AI resume screening platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold">Jane Doe</h4>
                  <p className="text-sm text-gray-500">CTO, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700">
                "This platform has transformed our hiring process. We've reduced time-to-hire by 60% and found
                candidates who are a much better fit for our technical roles. We've hired several exceptional developers
                who didn't have traditional CS degrees but had amazing skills."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  MS
                </div>
                <div>
                  <h4 className="font-semibold">Mark Smith</h4>
                  <p className="text-sm text-gray-500">HR Director, StartupX</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The AI's ability to identify exceptional abilities in candidates that we might have overlooked has been
                invaluable. We've built a stronger, more diverse engineering team by focusing on skills rather than
                credentials."
              </p>
            </div>
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

