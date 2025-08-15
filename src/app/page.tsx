"use client";

import Ai from "@/components/Ai";
import Dynamics from "@/components/Dynamics";
import Foundation from "@/components/Foundation";
import How from "@/components/How";
import Introduction from "@/components/Introduction";
import Kinematic from "@/components/Kinematic";
import Perception from "@/components/Perception";
import RoboticsCore from "@/components/RoboticsCore";
import {
  Bars3Icon,
  CalendarIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Load from localStorage on mount
  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    const savedWeek = localStorage.getItem("expandedWeek");
    if (savedTab) setActiveTab(savedTab);
    if (savedWeek) setExpandedWeek(savedWeek);
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (expandedWeek) {
      localStorage.setItem("expandedWeek", expandedWeek);
    } else {
      localStorage.removeItem("expandedWeek");
    }
  }, [expandedWeek]);

  const navigation = [
    { name: "Robotics Core Workshop", icon: HomeIcon, id: "dashboard" },
    {
      name: "Week1: Introduction to Robotics",
      icon: CalendarIcon,
      id: "week1",
      subItems: [
        { name: "Foundations", id: "foundations" },
        { name: "Kinematics", id: "kinematics" },
        { name: "Dynamics and Control", id: "dynamics" },
        { name: "Perception and Planning", id: "perception" },
        { name: "Artificial Intelligence (AI)", id: "ai" },
        { name: "How They All Work Together", id: "integration" },
      ],
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <RoboticsCore />;
      case "week1":
        return <Introduction />;
      case "foundations":
        return <Foundation />;
      case "kinematics":
        return <Kinematic />;
      case "dynamics":
        return <Dynamics />;
      case "perception":
        return <Perception />;
      case "ai":
        return <Ai />;
      case "integration":
        return <How />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 lg:flex">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out 
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    lg:relative lg:translate-x-0 lg:flex-shrink-0`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-6 border-b">
            <h1 className="font-bold">Robotics Core Workshop</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 px-3 py-6">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      if (item.subItems) {
                        setExpandedWeek(
                          expandedWeek === item.id ? null : item.id
                        );
                        setActiveTab(item.id);
                      } else {
                        setActiveTab(item.id);
                        setExpandedWeek(null);
                      }
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === item.id
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </button>

                  {item.subItems && expandedWeek === item.id && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            setActiveTab(sub.id);
                            setSidebarOpen(false);
                          }}
                          className={`block w-full text-left px-3 py-1 text-sm rounded-md ${
                            activeTab === sub.id
                              ? "bg-blue-50 text-blue-700"
                              : "text-gray-500 hover:bg-gray-50"
                          }`}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <div className="flex flex-col min-h-screen lg:flex-1">
        <div className="sticky top-0 z-30 bg-white shadow-sm border-b">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Welcome to Robotics Core Workshop
              </span>
            </div>
          </div>
        </div>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{renderContent()}</main>
      </div>
    </div>
  );
}
