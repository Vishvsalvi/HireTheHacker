"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, Key, Lock, Save, User, Users } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [saveStatus, setSaveStatus] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    setSaveStatus("success");
    
    // Reset status after 3 seconds
    setTimeout(() => {
      setSaveStatus(null);
    }, 3000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-gray-500">Manage your account and preferences</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:w-[600px]">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your personal information and profile settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSave} className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="space-y-2">
                      <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center relative overflow-hidden">
                        <User className="h-12 w-12 text-gray-500" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <Button variant="ghost" size="sm" className="text-white">
                            Change
                          </Button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">
                        JPG, GIF or PNG. 1MB max.
                      </p>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input id="first-name" defaultValue="Jane" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input id="last-name" defaultValue="Doe" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="jane.doe@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="title">Job title</Label>
                        <Input id="title" defaultValue="HR Manager" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea 
                          id="bio" 
                          placeholder="Write a short bio about yourself..."
                          defaultValue="HR professional with 5+ years of experience in tech recruitment."
                          className="min-h-32"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {saveStatus && (
                    <div className={`p-4 rounded-md ${saveStatus === "success" ? "bg-green-50" : "bg-red-50"}`}>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          {saveStatus === "success" ? (
                            <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <AlertCircle className="h-5 w-5 text-red-400" />
                          )}
                        </div>
                        <div className="ml-3">
                          <p className={`text-sm font-medium ${saveStatus === "success" ? "text-green-800" : "text-red-800"}`}>
                            {saveStatus === "success" 
                              ? "Profile updated successfully!" 
                              : "There was an error updating your profile. Please try again."}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>
                  Manage your password and security settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm new password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Update Password
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>
                  Add an extra layer of security to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Two-factor authentication</p>
                    <p className="text-sm text-gray-500">
                      Add an extra layer of security to your account by requiring both a password and verification code.
                    </p>
                  </div>
                  <Switch />
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">Recovery codes</p>
                      <p className="text-sm text-gray-500">
                        Generate recovery codes to access your account if you lose your two-factor authentication device.
                      </p>
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Key className="h-4 w-4" />
                      Generate Codes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>
                  Manage your team and their access permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="relative w-full md:w-64">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        type="search"
                        placeholder="Search team members..."
                        className="pl-8"
                      />
                    </div>
                    <Button className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Invite Member
                    </Button>
                  </div>
                  
                  <div className="rounded-md border">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Name</th>
                          <th className="text-left py-3 px-4">Email</th>
                          <th className="text-left py-3 px-4">Role</th>
                          <th className="text-right py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-blue-600 font-medium">JD</span>
                              </div>
                              <span>Jane Doe</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">jane.doe@example.com</td>
                          <td className="py-3 px-4">
                            <Badge variant="outline">Admin</Badge>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                <span className="text-green-600 font-medium">JS</span>
                              </div>
                              <span>John Smith</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">john.smith@example.com</td>
                          <td className="py-3 px-4">
                            <Badge variant="outline">Member</Badge>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                                <span className="text-purple-600 font-medium">AT</span>
                              </div>
                              <span>Alex Taylor</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">alex.taylor@example.com</td>
                          <td className="py-3 px-4">
                            <Badge variant="outline">Viewer</Badge>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Roles & Permissions</CardTitle>
                <CardDescription>
                  Configure access levels for different team roles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Role</th>
                          <th className="text-left py-3 px-4">View Screenings</th>
                          <th className="text-left py-3 px-4">Create Screenings</th>
                          <th className="text-left py-3 px-4">Manage Team</th>
                          <th className="text-left py-3 px-4">Billing</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Admin</td>
                          <td className="py-3 px-4">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </td>
                          <td className="py-3 px-4">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </td>
                          <td className="py-3 px-4">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </td>
                          <td className="py-3 px-4">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Member</td>
                          <td className="py-3 px-4">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </td>
                          <td className="py-3 px-4">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </td>
                          <td className="py-3 px-4">
                            <X className="h-5 w-5 text-red-500" />
                          </td>
                          <td className="py-3 px-4">
                            <X className="h-5 w-5 text-red-500" />
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Viewer</td>
                          <td className="py-3 px-4">
                            <CheckCircle className="h-5 w-5 text\

