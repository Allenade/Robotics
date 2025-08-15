import Image from "next/image";
import React from "react";

export default function Dynamics() {
  return (
    <div className="p-8 max-w-4xl space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Week 1: Introduction to Robotics
      </h1>

      {/* Roadmap Image */}
      <div>
        <Image
          src="/image/Roadman.jpeg"
          alt="Robotics Roadmap"
          width={400}
          height={250}
          className="mx-auto mb-6 rounded-lg shadow-md"
          priority
        />
      </div>

      {/* Foundations */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Foundations
        </h2>
        <p>
          Think of this roadmap like you are building a house – each stage
          builds on the previous ones.
        </p>
        <p className="mt-2">
          <strong>What it is:</strong> The basic tools and knowledge you need
          before building any robot.
        </p>
        <h3 className="mt-3 font-semibold">Real-world applications:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Math & Physics:</strong> A delivery drone calculating how
            much battery power it needs to fly 5 miles against a 15 mph wind.
          </li>
          <li>
            <strong>Programming:</strong> A vacuum robot coded to turn right
            when it hits a wall and keep cleaning.
          </li>
          <li>
            <strong>Data Analysis:</strong> A farming robot analyzing soil
            moisture data to decide where to water crops.
          </li>
        </ul>
        <p className="mt-2 italic">
          Think of foundations like learning to drive – you need to understand
          the basics before you can navigate traffic.
        </p>
      </section>

      {/* Kinematics */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Kinematics
        </h2>
        <p>
          <strong>What it is:</strong> Understanding how robot parts move and
          where they end up.
        </p>
        <h3 className="mt-3 font-semibold">Real-world applications:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Forward Kinematics:</strong> A robotic arm calculating its
            exact hand position from joint angles.
          </li>
          <li>
            <strong>Inverse Kinematics:</strong> A surgical robot determining
            precise joint angles to reach a spot inside the body.
          </li>
        </ul>
        <p className="mt-2 italic">
          Like reaching for your coffee cup without looking — your brain
          calculates the movements automatically.
        </p>
      </section>

      {/* Dynamics & Control */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Dynamics and Control
        </h2>
        <h3 className="font-semibold">Dynamics:</h3>
        <p>
          Understanding forces acting on a robot and how they affect movement.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Gravity:</strong> Robotic arms lifting heavy car parts must
            overcome downward pull.
          </li>
          <li>
            <strong>Friction:</strong> Walking robots need grip to avoid
            slipping.
          </li>
          <li>
            <strong>External Forces:</strong> Construction robots must adapt to
            wind resistance.
          </li>
        </ul>
        <h3 className="mt-4 font-semibold">Control:</h3>
        <p>Systems that actively adjust robot movements to achieve outcomes.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Drone stabilization against wind.</li>
          <li>
            Walking robots adjusting balance on uneven terrain (e.g., Boston
            Dynamics’ Atlas).
          </li>
          <li>Prosthetic limbs applying precise grip strength.</li>
          <li>Surgical robots filtering out hand tremors.</li>
        </ul>
        <p className="mt-2 italic">
          Dynamics is the physics problem, control is solving it in real-time.
        </p>
      </section>

      {/* Perception & Planning */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Perception and Planning
        </h2>
        <p>
          <strong>What it is:</strong> Helping robots see, understand their
          environment, and plan actions.
        </p>
        <h3 className="mt-3 font-semibold">Real-world applications:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Self-driving cars detecting pedestrians and planning routes.</li>
          <li>Amazon warehouse robots navigating shelves efficiently.</li>
          <li>Robot vacuums mapping homes for cleaning paths.</li>
          <li>Rescue robots navigating rubble to save lives.</li>
          <li>Mars rovers planning multi-day terrain exploration.</li>
        </ul>
        <p className="mt-2 italic">
          Like arriving in a new city — figuring out where you are, where you
          want to go, and the best route.
        </p>
      </section>

      {/* AI */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Artificial Intelligence (AI)
        </h2>
        <p>
          <strong>What it is:</strong> Making robots smart enough to make
          decisions and learn.
        </p>
        <h3 className="mt-3 font-semibold">Real-world applications:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Personal assistants adjusting home lighting, temperature, and music.
          </li>
          <li>
            Agricultural robots identifying ripe vs. unripe crops for
            harvesting.
          </li>
          <li>
            Security robots learning normal vs. suspicious patterns in malls.
          </li>
        </ul>
        <p className="mt-2 italic">
          Like the difference between following a recipe vs. being a chef who
          adapts and improvises.
        </p>
      </section>

      {/* Integration */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How They All Work Together
        </h2>
        <p>
          Imagine a <strong>robot chef</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Foundations:</strong> Knows cooking principles and processes
            ingredients.
          </li>
          <li>
            <strong>Kinematics:</strong> Moves arms to chop vegetables at the
            right angles.
          </li>
          <li>
            <strong>Dynamics & Control:</strong> Applies pressure for cutting
            and stirs steadily.
          </li>
          <li>
            <strong>Perception & Planning:</strong> Detects when food is ready
            and times dishes.
          </li>
          <li>
            <strong>AI:</strong> Learns customer preferences and adapts cooking
            automatically.
          </li>
        </ul>
      </section>
      <div>
        <Image
          src="/image/key.jpeg"
          alt="Robotics Roadmap"
          width={400}
          height={250}
          className="mx-auto mb-6 rounded-lg shadow-md"
          priority
        />
        <Image
          src="/image/application.jpeg"
          alt="Robotics Roadmap"
          width={400}
          height={250}
          className="mx-auto mb-6 rounded-lg shadow-md"
          priority
        />
      </div>
      <footer>
        © Copyright 2025, Bakel-Bakel. Built with Sphinx using a theme provided
        by Read the Docs.
      </footer>
    </div>
  );
}
