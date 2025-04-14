"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BarChart, Clock, FileText, Filter, Users } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import CandidateCard from "@/components/candidate-card"
import { LoadingScreen } from "@/components/loading-screen"
import Link from "next/link"

// Sample data for demonstration
const topCandidates = [
  {
    id: 1,
    name: "Alex Johnson",
    photo: "/placeholder.svg?height=80&width=80",
    title: "Senior Frontend Developer",
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS"],
    experience: "7 years",
    education: "MS Computer Science, Stanford",
    match: 96,
    exceptional: ["UI Performance Optimization", "Design Systems"],
    highlights: [
      "Led frontend team of 5 engineers at Acme Inc.",
      "Reduced bundle size by 45% through code splitting",
      "Created reusable component library used across 3 products",
    ],
  },
  {
    id: 2,
    name: "Jamie Smith",
    photo: "/placeholder.svg?height=80&width=80",
    title: "Full Stack Engineer",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"],
    experience: "5 years",
    education: "BS Computer Science, MIT",
    match: 92,
    exceptional: ["System Architecture", "Performance Optimization"],
    highlights: [
      "Architected microservice infrastructure serving 1M+ users",
      "Improved API response times by 60%",
      "Implemented CI/CD pipeline reducing deployment time by 70%",
    ],
  },
  {
    id: 3,
    name: "Taylor Rodriguez",
    photo: "/placeholder.svg?height=80&width=80",
    title: "Frontend Developer",
    skills: ["React", "JavaScript", "CSS", "Redux", "Jest"],
    experience: "4 years",
    education: "BS Software Engineering, UC Berkeley",
    match: 88,
    exceptional: ["Accessibility", "Animation"],
    highlights: [
      "Implemented WCAG 2.1 AA compliance across platform",
      "Created animation library reducing development time by 30%",
      "Mentored 3 junior developers",
    ],
  },
  {
    id: 4,
    name: "Morgan Lee",
    photo: "/placeholder.svg?height=80&width=80",
    title: "Senior Backend Developer",
    skills: ["Node.js", "Python", "PostgreSQL", "Docker", "Kubernetes"],
    experience: "6 years",
    education: "MS Software Engineering, Georgia Tech",
    match: 85,
    exceptional: ["Database Optimization", "Scalability"],
    highlights: [
      "Designed database schema supporting 500M+ records",
      "Implemented sharding strategy reducing query times by 80%",
      "Led migration from monolith to microservices architecture",
    ],
  },
]

const recentScreenings = [
  {
    id: "SCR-1234",
    position: "Frontend Developer",
    date: "2023-03-15",
    candidates: 42,
    topMatch: 96,
  },
  {
    id: "SCR-1233",
    position: "Backend Engineer",
    date: "2023-03-10",
    candidates: 38,
    topMatch: 92,
  },
  {
    id: "SCR-1232",
    position: "DevOps Specialist",
    date: "2023-03-05",
    candidates: 24,
    topMatch: 88,
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("top-picks")
  const [candidates, setCandidates] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 2

  useEffect(() => {
    // Simulate loading data
    setLoading(true)
    setTimeout(() => {
      setCandidates(topCandidates)
      setLoading(false)
    }, 1000)
  }, [])

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentCandidates = candidates.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(candidates.length / itemsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500">View your screening results and top candidates</p>
          </div>
          <div className="flex gap-3">
            <Button asChild className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white">
              <Link href='/add-resume' >
              <FileText className="h-4 w-4" />
              New Screening
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Screenings</p>
                  <h3 className="text-2xl font-bold mt-1">24</h3>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-500 font-medium">+12%</span>
                <span className="text-gray-500 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Candidates Screened</p>
                  <h3 className="text-2xl font-bold mt-1">842</h3>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-500 font-medium">+18%</span>
                <span className="text-gray-500 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Avg. Match Score</p>
                  <h3 className="text-2xl font-bold mt-1">76%</h3>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-500 font-medium">+5%</span>
                <span className="text-gray-500 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Time Saved</p>
                  <h3 className="text-2xl font-bold mt-1">128 hrs</h3>
                </div>
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-500 font-medium">+22%</span>
                <span className="text-gray-500 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Candidates Section */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="pb-0">
                <div className="flex justify-between items-center">
                  <CardTitle>Candidate Results</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="top-picks">Top Picks</TabsTrigger>
                    <TabsTrigger value="all-candidates">All Candidates</TabsTrigger>
                    <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
                  </TabsList>

                  <TabsContent value="top-picks" className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm text-gray-500">
                        Showing top candidates based on skills, experience, and exceptional abilities
                      </p>
                    </div>

                    <div className="space-y-4">
                      {currentCandidates.map((candidate) => (
                        <CandidateCard key={candidate.id} candidate={candidate} />
                      ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-sm text-gray-500">
                        Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, candidates.length)} of{" "}
                        {candidates.length} candidates
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={handlePrevPage} disabled={currentPage === 1}>
                          Previous
                        </Button>
                        {Array.from({ length: totalPages }, (_, i) => (
                          <Button
                            key={i}
                            variant="outline"
                            size="sm"
                            className={currentPage === i + 1 ? "bg-blue-50" : ""}
                            onClick={() => setCurrentPage(i + 1)}
                          >
                            {i + 1}
                          </Button>
                        ))}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleNextPage}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="all-candidates">
                    <div className="flex items-center justify-center h-40">
                      <p className="text-gray-500">View all 42 candidates from this screening</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="shortlisted">
                    <div className="flex items-center justify-center h-40">
                      <p className="text-gray-500">You haven't shortlisted any candidates yet</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Screenings */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Screenings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentScreenings.map((screening) => (
                    <div key={screening.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{screening.position}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{screening.id}</span>
                          <span>•</span>
                          <span>{new Date(screening.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{screening.candidates} candidates</div>
                        <div className="text-sm text-gray-500">{screening.topMatch}% top match</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4">
                  View All Screenings
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

