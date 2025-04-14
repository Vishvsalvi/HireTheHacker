import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your hiring needs. All plans include our core AI screening technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8">
              <h3 className="text-lg font-medium text-gray-500 mb-2">Starter</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for small teams or occasional hiring needs.</p>
              <Link href="/auth?signup=true">
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="border-t border-gray-100 px-8 py-6">
              <ul className="space-y-4">
                <PricingFeature>Up to 50 resumes per month</PricingFeature>
                <PricingFeature>Basic skill matching</PricingFeature>
                <PricingFeature>Email support</PricingFeature>
                <PricingFeature>1 team member</PricingFeature>
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-blue-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
              Most Popular
            </div>
            <div className="p-8">
              <h3 className="text-lg font-medium text-gray-500 mb-2">Professional</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Ideal for growing teams with regular hiring needs.</p>
              <Link href="/auth?signup=true">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
            <div className="border-t border-gray-100 px-8 py-6">
              <ul className="space-y-4">
                <PricingFeature>Up to 200 resumes per month</PricingFeature>
                <PricingFeature>Advanced skill matching</PricingFeature>
                <PricingFeature>Experience-based ranking</PricingFeature>
                <PricingFeature>Priority email support</PricingFeature>
                <PricingFeature>5 team members</PricingFeature>
                <PricingFeature>Custom job templates</PricingFeature>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8">
              <h3 className="text-lg font-medium text-gray-500 mb-2">Enterprise</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <p className="text-gray-600 mb-6">For organizations with high-volume hiring needs.</p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </Link>
            </div>
            <div className="border-t border-gray-100 px-8 py-6">
              <ul className="space-y-4">
                <PricingFeature>Unlimited resumes</PricingFeature>
                <PricingFeature>Advanced AI screening</PricingFeature>
                <PricingFeature>Exceptional ability detection</PricingFeature>
                <PricingFeature>Dedicated account manager</PricingFeature>
                <PricingFeature>Unlimited team members</PricingFeature>
                <PricingFeature>API access</PricingFeature>
                <PricingFeature>Custom integrations</PricingFeature>
                <PricingFeature>Advanced analytics</PricingFeature>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">How accurate is the AI screening?</h3>
              <p className="text-gray-600">
                Our AI has been trained on millions of resumes and job descriptions, achieving a 95% accuracy rate
                compared to human recruiters in blind tests.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">
                Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">
                Yes, all plans come with a 14-day free trial so you can test the platform with your actual hiring needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How do you handle data privacy?</h3>
              <p className="text-gray-600">
                We take data privacy seriously. All resume data is encrypted, and we are GDPR and CCPA compliant. We
                never share candidate data with third parties.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact our sales team to discuss your specific requirements and how we can tailor our platform to your
            needs.
          </p>
          <Link href="/contact">
            <Button size="lg">Contact Sales</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  )
}

