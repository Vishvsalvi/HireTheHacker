"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ArrowLeft,
  CheckCircle,
  ChevronDown,
  Download,
  Eye,
  Filter,
  MoreHorizontal,
  Star,
  StarOff,
  Trash2,
  User,
} from "lucide-react"
import { ResumeViewDialog } from "@/components/resume-view-dialog"

// Sample data for demonstration
const candidates = [
  {
    id: 1,
    name: "Alex Johnson",
    photo: "/placeholder.svg?height=40&width=40",
    title: "Senior Frontend Developer",
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
    experience: "7 years",
    education: "MS Computer Science",
    match: 96,
    shortlisted: true,
    screening: "SCR-1234",
    resumeUrl: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 2,
    name: "Jamie Smith",
    photo: "/placeholder.svg?height=40&width=40",
    title: "Full Stack Engineer",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    experience: "5 years",
    education: "BS Computer Science",
    match: 92,
    shortlisted: true,
    screening: "SCR-1234",
    resumeUrl: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 3,
    name: "Taylor Rodriguez",
    photo: "/placeholder.svg?height=40&width=40",
    title: "Frontend Developer",
    skills: ["React", "JavaScript", "CSS", "Redux"],
    experience: "4 years",
    education: "BS Software Engineering",
    match: 88,
    shortlisted: false,
    screening: "SCR-1234",
    resumeUrl: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 4,
    name: "Morgan Lee",
    photo: "/placeholder.svg?height=40&width=40",
    title: "Senior Backend Developer",
    skills: ["Node.js", "Python", "PostgreSQL", "Docker"],
    experience: "6 years",
    education: "MS Software Engineering",
    match: 85,
    shortlisted: false,
    screening: "SCR-1233",
    resumeUrl: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 5,
    name: "Casey Wilson",
    photo: "/placeholder.svg?height=40&width=40",
    title: "DevOps Engineer",
    skills: ["Kubernetes", "Docker", "AWS", "Terraform"],
    experience: "5 years",
    education: "BS Computer Engineering",
    match: 90,
    shortlisted: true,
    screening: "SCR-1232",
    resumeUrl: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 6,
    name: "Jordan Patel",
    photo: "/placeholder.svg?height=40&width=40",
    title: "UX Designer",
    skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
    experience: "4 years",
    education: "BFA Design",
    match: 87,
    shortlisted: false,
    screening: "SCR-1230",
    resumeUrl: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 7,
    name: "Riley Thompson",
    photo: "/placeholder.svg?height=40&width=40",
    title: "Data Scientist",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Typescript", "Tailwind CSS"],
    experience: "3 years",
    education: "MS Data Science",
    match: 94,
    shortlisted: true,
    screening: "SCR-1229",
    resumeUrl: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 8,
    name: "Avery Martinez",
    photo: "/placeholder.svg?height=40&width=40",
    title: "Mobile Developer",
    skills: ["React Native", "Swift", "Kotlin", "Firebase"],
    experience: "5 years",
    education: "BS Computer Science",
    match: 89,
    shortlisted: false,
    screening: "SCR-1228",
    resumeUrl: "/placeholder.svg?height=800&width=600",
  },
]

// Define a type for candidate
interface Candidate {
  id: number;
  name: string;
  photo: string;
  title: string;
  skills: string[];
  experience: string;
  education: string;
  match: number;
  shortlisted: boolean;
  screening: string;
  resumeUrl: string;
}

export default function ScreeningResults() {
  const router = useRouter()
  const params = useParams()
  const screeningId = params.screeningId as string
  
  const [filteredCandidates, setFilteredCandidates] = useState(candidates)
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [filterStatus, setFilterStatus] = useState("all")
  const [expandedSkills, setExpandedSkills] = useState<number[]>([])

  // Filter function
  const applyFilter = (status: string) => {
    setFilterStatus(status)

    if (status === "all") {
      setFilteredCandidates(candidates)
    } else if (status === "shortlisted") {
      setFilteredCandidates(candidates.filter((candidate) => candidate.shortlisted))
    } else if (status === "not-shortlisted") {
      setFilteredCandidates(candidates.filter((candidate) => !candidate.shortlisted))
    }
  }

  const openResumeView = (candidate: Candidate) => {
    setSelectedCandidate(candidate)
    setIsResumeOpen(true)
  }

  const toggleSkillsExpansion = (candidateId: number) => {
    setExpandedSkills(prev => 
      prev.includes(candidateId) 
        ? prev.filter(id => id !== candidateId) 
        : [...prev, candidateId]
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => router.push('/screenings')}
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Candidate for {screeningId}</h1>
              <p className="text-gray-500">View and manage all candidates across screenings</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  {filterStatus === "all"
                    ? "All Candidates"
                    : filterStatus === "shortlisted"
                      ? "Shortlisted"
                      : "Not Shortlisted"}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => applyFilter("all")}>All Candidates</DropdownMenuItem>
                <DropdownMenuItem onClick={() => applyFilter("shortlisted")}>Shortlisted</DropdownMenuItem>
                <DropdownMenuItem onClick={() => applyFilter("not-shortlisted")}>Not Shortlisted</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Card>
          <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
            <CardTitle>All Candidates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Skills</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Match</TableHead>
                    <TableHead>Screening</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCandidates.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                        No candidates found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredCandidates.map((candidate) => (
                      <TableRow key={candidate.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="font-medium">{candidate.name}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1 max-w-xs">
                            {expandedSkills.includes(candidate.id) 
                              ? candidate.skills.map((skill, index) => (
                                  <Badge key={index} variant="secondary" className="font-normal">
                                    {skill}
                                  </Badge>
                                ))
                              : <>
                                  {candidate.skills.slice(0, 3).map((skill, index) => (
                                    <Badge key={index} variant="secondary" className="font-normal">
                                      {skill}
                                    </Badge>
                                  ))}
                                  {candidate.skills.length > 3 && (
                                    <Badge 
                                      variant="outline" 
                                      className="font-normal cursor-pointer hover:bg-gray-100"
                                      onClick={() => toggleSkillsExpansion(candidate.id)}
                                    >
                                      +{candidate.skills.length - 3}
                                    </Badge>
                                  )}
                                </>
                            }
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{candidate.experience}</div>
                            <div className="text-gray-500">{candidate.education}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div
                              className={`h-2 w-2 rounded-full mr-2 ${
                                candidate.match >= 90
                                  ? "bg-green-500"
                                  : candidate.match >= 80
                                    ? "bg-green-400"
                                    : candidate.match >= 70
                                      ? "bg-yellow-400"
                                      : "bg-red-400"
                              }`}
                            ></div>
                            <span className="font-medium">{candidate.match}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="font-normal">
                            {candidate.screening}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {candidate.shortlisted ? (
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                              <Star className="h-3 w-3 fill-yellow-500 mr-1" />
                              Shortlisted
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-gray-500">
                              <StarOff className="h-3 w-3 mr-1" />
                              Not Shortlisted
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => openResumeView(candidate)}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                {candidate.shortlisted ? (
                                  <>
                                    <StarOff className="h-4 w-4 mr-2" />
                                    Remove from Shortlist
                                  </>
                                ) : (
                                  <>
                                    <Star className="h-4 w-4 mr-2" />
                                    Add to Shortlist
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-500">
                Showing {filteredCandidates.length} of {candidates.length} candidates
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-blue-50">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Resume View Dialog */}
      {selectedCandidate && (
        <ResumeViewDialog isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} candidate={selectedCandidate} />
      )}
    </div>
  )
}

