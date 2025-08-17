"use client";

import Image from "next/image";
import React from "react";

export default function RoboticsCore() {
  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div>
        <h2 className="text-2xl pb-5 font-bold text-gray-900">
          Robotics Core Workshop Documentation
        </h2>
        <h2 className="text-2xl pb-8 font-bold mt-1">
          Is this workshop worth it?
        </h2>
        <p>Find out in this brief overview below</p>
      </div>

      {/* Video */}
      <div className="py-8">
        <div className="bg-slate-200 rounded-lg aspect-video mb-6 flex items-center justify-center">
          <iframe
            src="https://www.youtube.com/embed/KzGr6Osyh-w"
            title="Aurora Robotics Core Workshop Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>

      {/* Certificate Info */}
      <h2 className="text-2xl py-5 font-bold text-gray-900">
        A Certificate of Training certified by:
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Aurora Robotics, Nigeria 🇳🇬</li>
        <li>Volts Technologies, Kuwait 🇰🇼</li>
        <li>Regalia Marine, Nigeria 🇳🇬</li>
      </ul>
      <div className="py-8">
        <div className="bg-slate-200 rounded-lg aspect-video mb-6 flex items-center justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/akZKYqUCX-g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
        <div className="bg-slate-200 rounded-lg aspect-video mb-6 flex items-center justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UL35D3-UU38"
            title="Overview of Aurora Workshop and an Introduction to Robotics"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
      {/* Workshop Benefits */}
      <h2 className="text-2xl py-5 font-bold text-gray-900">
        At the end of the workshop, you’ll have:
      </h2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Strong Theoretical Foundations</strong> – Understand the
          mathematics and principles behind robotics, not just how to use tools,
          but how to innovate.
        </li>
        <li>
          <strong>Practical Coding Skills</strong> – Learn to translate robotics
          theory into working Python, C++, Rust, and MATLAB programs.
        </li>
        <li>
          <strong>Simulation Mastery</strong> – Build and test your robotics
          models in PyBullet, Gazebo, and ROS 2 environments.
        </li>
        <li>
          <strong>Open-Source Contribution Experience</strong> – Contribute to a
          real, live robotics project and have it reflected in your GitHub
          activity.
        </li>
        <li>
          <strong>Professional GitHub Portfolio</strong> – Weekly assignments
          pushed to GitHub to grow a presentable, industry-ready repository.
        </li>
        <li>
          <strong>Problem-Solving Skills</strong> – Learn to break down complex
          robotics problems into theory, code, and implementation steps.
        </li>
        <li>
          <strong>Industry Insight & Career Guidance</strong> – Participate in
          Wayforward Weekends for CV polishing, scholarship application tips,
          and industry trends.
        </li>
        <li>
          <strong>Live Problem-Hacking Experience</strong> – Join Sidequest
          Sundays to watch and interact as real, challenging robotics problems
          are solved live.
        </li>
        <li>
          <strong>Confidence to Innovate</strong> – Move beyond simply applying
          existing packages to creating your own algorithms and solutions.
        </li>
        <li>
          <strong>Network & Community</strong> – Be part of a growing robotics
          community through Aurora Robotics, connecting with like-minded
          innovators.
        </li>
      </ul>

      {/* Prerequisites */}
      <h2 className="text-2xl py-5 font-bold text-gray-900">Prerequisites:</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>A laptop (Any Operating System, but preferably Linux)</li>
        <li>
          Software installations will be done in the first week, so don’t worry
          about the software you will need.
        </li>
      </ul>

      {/* About the Tutor */}
      <h2 className="text-2xl py-5 font-bold text-gray-900">About The Tutor</h2>
      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="https://www.regaliamarine.com/aurora-robotics-training"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register Now
        </a>
        <a
          href="https://www.linkedin.com/in/bakel-bakel-6341a7150/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://www.upwork.com/freelancers/bakel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Upwork
        </a>
      </div>

      {/* Tutor Images */}
      <div className="mt-8">
        <Image
          src="/image/Bakel.jpeg"
          alt="Bakel"
          width={600}
          height={600}
          className="mx-auto mb-4"
          priority
          quality={100}
        />
        <Image
          src="/image/AmBakel.jpeg"
          alt="Bakel"
          width={600}
          height={600}
          className="mx-auto mb-4"
          priority
          quality={100}
        />
      </div>

      {/* Schedule */}
      <div className="mt-12">
        <div className="flex justify-center">
          <h1 className="text-2xl pb-5 font-bold text-gray-900">
            Workshop Schedule
          </h1>
        </div>
        <div>
          <Image
            src="/image/plan.jpeg"
            alt="Lesson Plan"
            width={600}
            height={600}
            className="mx-auto mb-6 rounded-lg"
            priority
          />
        </div>

        {/* Content Sections */}
        <div>
          <h1 className="text-2xl pb-5 font-bold text-gray-900">Content</h1>
          <ul className="list-disc pl-6 space-y-2">
            <li>Week 1: Introduction to Robotics</li>
            <li>Foundations</li>
            <li>Kinematics</li>
            <li>Dynamics and Control</li>
            <li>Perception and Planning</li>
            <li>Artificial Intelligence (AI)</li>
            <li>How They All Work Together</li>
          </ul>
        </div>
      </div>
      <footer className="py-6">
        © Copyright 2025, Bakel-Bakel. Built with Sphinx using a theme provided
        by Read the Docs.
      </footer>
    </div>
  );
}
