"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Star, X } from "lucide-react"

export function ResumeViewDialog({ isOpen, onClose, candidate }) {
  const [activeTab, setActiveTab] = useState("resume")

  if (!candidate) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b flex flex-row items-center justify-between">
          <div className="flex items-center gap-4">
           
            <div>
              <DialogTitle className="text-xl">{candidate.name}</DialogTitle>
              <div className="text-gray-500">{candidate.title}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1.5" />
              <span className="font-bold">{candidate.match}%</span>
            </div>
          </div>
        </DialogHeader>

        <div className="flex border-b">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "resume" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("resume")}
          >
            Resume
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "analysis"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("analysis")}
          >
            AI Analysis
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          {activeTab === "resume" ? (
            <div className="h-full flex items-center justify-center bg-gray-50">
              <img
                src={candidate.resumeUrl || "/placeholder.svg"}
                alt={`${candidate.name}'s Resume`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ) : (
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Skills Assessment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {candidate.skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                      <span>{skill}</span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{Math.floor(Math.random() * 40) + 60}/100</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Exceptional Abilities</h3>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "System Design", "Code Quality", "Technical Communication"].map(
                    (ability, index) => (
                      <Badge key={index} className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1">
                        {ability}
                      </Badge>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Experience Highlights</h3>
                <ul className="space-y-2">
                  {[
                    "Led development of a high-traffic e-commerce platform",
                    "Implemented CI/CD pipeline reducing deployment time by 70%",
                    "Optimized database queries resulting in 40% performance improvement",
                    "Mentored junior developers and conducted code reviews",
                  ].map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">AI Insights</h3>
                <div className="p-4 bg-blue-50 rounded-lg text-gray-700">
                  <p className="mb-3">
                    This candidate demonstrates strong technical expertise in{" "}
                    {candidate.skills.slice(0, 2).join(" and ")} with practical application in real-world projects.
                    Their experience aligns well with the job requirements.
                  </p>
                  <p>
                    Notable strengths include system architecture design and performance optimization. Consider
                    exploring their experience with scalable applications during the interview.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t px-6 py-4 flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Shortlist
            </Button>
          </div>
          <Button>Schedule Interview</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

