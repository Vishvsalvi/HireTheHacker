"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUp, Upload, CheckCircle, AlertCircle } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function AddResumePage() {
  const [activeTab, setActiveTab] = useState("upload")
  const [files, setFiles] = useState<File[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<null | "success" | "error">(null)
  const [jobTitle, setJobTitle] = useState("")
  const [jobDescription, setJobDescription] = useState("")

  // Handle drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  // Handle drop event
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files)
    }
  }

  // Handle file input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files)
    }
  }

  // Process the files
  const handleFiles = (fileList: FileList) => {
    const newFiles = Array.from(fileList).filter(
      (file) =>
        file.type === "application/pdf" ||
        file.type === "application/msword" ||
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    )

    setFiles((prev) => [...prev, ...newFiles])
  }

  // Remove a file from the list
  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, this would upload the files to a server
    // For demo purposes, we'll simulate a successful upload
    setUploadStatus("success")

    // Reset form after "upload"
    setTimeout(() => {
      setFiles([])
      setJobTitle("")
      setJobDescription("")
      setUploadStatus(null)
    }, 3000)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Add Resumes</h1>
          <p className="text-gray-500">Upload resumes and set job requirements for AI screening</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>New Screening</CardTitle>
            <CardDescription>Create a new screening by uploading resumes and defining job requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input
                    id="job-title"
                    placeholder="e.g., Senior Frontend Developer"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="job-description">Job Requirements</Label>
                  <Textarea
                    id="job-description"
                    placeholder="Describe the key requirements, skills, and qualifications for this position..."
                    className="min-h-32"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="upload">Upload Resumes</TabsTrigger>
                    <TabsTrigger value="bulk">Bulk Processing</TabsTrigger>
                  </TabsList>

                  <TabsContent value="upload" className="pt-4">
                    <div
                      className={`border-2 ${dragActive ? "border-blue-500 bg-blue-50" : "border-dashed"} rounded-lg p-8 text-center`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500 mb-4">Drag and drop resume files here, or click to browse</p>
                      <Input
                        id="resume-upload"
                        type="file"
                        multiple
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                      />
                      <Button variant="outline" onClick={() => document.getElementById("resume-upload")?.click()}>
                        Select Files
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Supported formats: PDF, DOC, DOCX</p>
                    </div>

                    {files.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-sm font-medium mb-2">Selected Files ({files.length})</h3>
                        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                          {files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                              <div className="flex items-center">
                                <FileUp className="h-4 w-4 text-blue-500 mr-2" />
                                <span className="text-sm truncate max-w-xs">{file.name}</span>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(index)}
                                className="h-8 w-8 p-0"
                              >
                                &times;
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="bulk" className="pt-4">
                    <div className="space-y-4">
                      <p className="text-sm text-gray-500">
                        Bulk processing allows you to upload a ZIP file containing multiple resumes or connect to your
                        existing ATS to import candidates.
                      </p>

                      <div className="border-2 border-dashed rounded-lg p-8 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500 mb-4">Upload a ZIP file containing multiple resumes</p>
                        <Input id="bulk-upload" type="file" className="hidden" accept=".zip" />
                        <Button variant="outline" onClick={() => document.getElementById("bulk-upload")?.click()}>
                          Upload ZIP
                        </Button>
                      </div>

                      <div className="text-center pt-4">
                        <p className="text-sm font-medium mb-2">Or connect to your existing ATS</p>
                        <div className="flex flex-wrap justify-center gap-2">
                          <Button variant="outline" className="h-12">
                            <img src="/placeholder.svg?height=24&width=24" alt="Greenhouse" className="mr-2" />
                            Greenhouse
                          </Button>
                          <Button variant="outline" className="h-12">
                            <img src="/placeholder.svg?height=24&width=24" alt="Lever" className="mr-2" />
                            Lever
                          </Button>
                          <Button variant="outline" className="h-12">
                            <img src="/placeholder.svg?height=24&width=24" alt="Workday" className="mr-2" />
                            Workday
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {uploadStatus && (
                <div className={`p-4 rounded-md ${uploadStatus === "success" ? "bg-green-50" : "bg-red-50"}`}>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      {uploadStatus === "success" ? (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-400" />
                      )}
                    </div>
                    <div className="ml-3">
                      <p
                        className={`text-sm font-medium ${uploadStatus === "success" ? "text-green-800" : "text-red-800"}`}
                      >
                        {uploadStatus === "success"
                          ? "Resumes uploaded successfully! AI screening in progress..."
                          : "There was an error uploading your files. Please try again."}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-3">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
                <Button type="submit" disabled={files.length === 0 || !jobTitle || !jobDescription}>
                  Start Screening
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why Our AI Screening is Better</CardTitle>
            <CardDescription>
              Traditional ATS systems filter out qualified candidates. Our AI finds the best talent.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-medium">Skill-Based Matching</h3>
                <p className="text-sm text-gray-500">
                  Our AI looks beyond keywords to understand the actual skills and capabilities demonstrated in resumes.
                </p>
              </div>

              <div className="space-y-2">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-medium">Exceptional Ability Detection</h3>
                <p className="text-sm text-gray-500">
                  We identify unique strengths and exceptional abilities that traditional ATS systems miss.
                </p>
              </div>

              <div className="space-y-2">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-medium">Reduced Bias</h3>
                <p className="text-sm text-gray-500">
                  Our AI is trained to focus on relevant skills and experience, not demographic information.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

