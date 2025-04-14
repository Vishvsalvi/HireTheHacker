"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  ChevronDown,
  Download,
  Eye,
  FileText,
  Filter,
  MoreHorizontal,
  Trash2,
  Users,
  CheckCircle,
} from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

// Sample data for demonstration
const screenings = [
  {
    id: "SCR-1284",
    position: "Senior Frontend Developer",
    date: "2023-03-15T10:30:00",
    candidates: 42,
    topMatch: 96,
    status: "completed",
  },
  {
    id: "SCR-1233",
    position: "Backend Engineer",
    date: "2023-03-10T14:15:00",
    candidates: 38,
    topMatch: 92,
    status: "completed",
  },
  {
    id: "SCR-1232",
    position: "DevOps Specialist",
    date: "2023-03-05T09:45:00",
    candidates: 24,
    topMatch: 88,
    status: "completed",
  },
  {
    id: "SCR-1231",
    position: "Product Manager",
    date: "2023-03-01T11:00:00",
    candidates: 31,
    topMatch: 85,
    status: "completed",
  },
  {
    id: "SCR-1230",
    position: "UX Designer",
    date: "2023-02-25T13:30:00",
    candidates: 27,
    topMatch: 90,
    status: "completed",
  },
  {
    id: "SCR-1229",
    position: "Data Scientist",
    date: "2023-02-20T15:45:00",
    candidates: 19,
    topMatch: 94,
    status: "completed",
  },
  {
    id: "SCR-1228",
    position: "Mobile Developer",
    date: "2023-02-15T10:00:00",
    candidates: 33,
    topMatch: 89,
    status: "completed",
  },
  {
    id: "SCR-1235",
    position: "Full Stack Developer",
    date: "2023-03-18T08:30:00",
    candidates: 12,
    topMatch: 0,
    status: "in_progress",
  },
]

export default function ScreeningsPage() {
  const router = useRouter()
  const [filteredScreenings, setFilteredScreenings] = useState(screenings)
  const [filterStatus, setFilterStatus] = useState("all")

  // Filter function
  const applyFilter = (status) => {
    setFilterStatus(status)

    if (status === "all") {
      setFilteredScreenings(screenings)
    } else {
      setFilteredScreenings(screenings.filter((screening) => screening.status === status))
    }
  }

  // Navigate to screening results
  const viewScreeningDetails = (screeningId: string) => {
    router.push(`/screenings/results/${screeningId}`)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Screenings</h1>
            <p className="text-gray-500">View and manage your resume screening sessions</p>
          </div>
          <div className="flex gap-3">
            <Link href="/add-resume">
            <Button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white">
              <FileText className="h-4 w-4" />
              New Screening
            </Button>
            </Link>
          </div>
        </div>

        <Card>
          <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
            <CardTitle>All Screenings</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    {filterStatus === "all"
                      ? "All Statuses"
                      : filterStatus === "completed"
                        ? "Completed"
                        : "In Progress"}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => applyFilter("all")}>All Statuses</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => applyFilter("completed")}>Completed</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => applyFilter("in_progress")}>In Progress</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Candidates</TableHead>
                    <TableHead>Top Match</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredScreenings.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                        No screenings found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredScreenings.map((screening) => (
                      <TableRow key={screening.id}>
                        <TableCell className="font-medium">{screening.id}</TableCell>
                        <TableCell>{screening.position}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                            {new Date(screening.date).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 text-gray-500 mr-2" />
                            {screening.candidates}
                          </div>
                        </TableCell>
                        <TableCell>
                          {screening.status === "in_progress" ? (
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                              In Progress
                            </Badge>
                          ) : (
                            <span className="font-medium">{screening.topMatch}%</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {screening.status === "completed" ? (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Completed
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                              In Progress
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
                              <DropdownMenuItem onClick={() => viewScreeningDetails(screening.id)}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="h-4 w-4 mr-2" />
                                Export Results
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
                Showing {filteredScreenings.length} of {screenings.length} screenings
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

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">New screening started</p>
                    <p className="text-sm text-gray-500">Full Stack Developer • 12 candidates</p>
                    <p className="text-xs text-gray-400 mt-1">Today at 8:30 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Screening completed</p>
                    <p className="text-sm text-gray-500">Senior Frontend Developer • 42 candidates</p>
                    <p className="text-xs text-gray-400 mt-1">March 15, 2023 at 10:30 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Screening completed</p>
                    <p className="text-sm text-gray-500">Backend Engineer • 38 candidates</p>
                    <p className="text-xs text-gray-400 mt-1">March 10, 2023 at 2:15 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Screening Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium mb-2">Why Our AI Beats Traditional ATS</h3>
                  <p className="text-sm text-gray-600">
                    Traditional ATS systems rely on keyword matching, often filtering out qualified candidates who don't
                    use the exact terminology. Our AI understands context and can identify relevant skills even when
                    described differently.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">For Best Results:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Be specific about required skills and experience in job descriptions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Upload resumes in PDF format for best parsing accuracy
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Review the "Exceptional Abilities" section to find hidden talent
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

