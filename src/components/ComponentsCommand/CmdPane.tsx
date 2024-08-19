"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  BellIcon,
  Cog8ToothIcon,
  DocumentIcon,
  DocumentPlusIcon,
  EnvelopeIcon,
  GlobeEuropeAfricaIcon,
  Squares2X2Icon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Input } from "../ui/input";
import { LineItem } from "./LineItem";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { motion } from "framer-motion";

export function CmdPane({ isVisible }: { isVisible: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);
  const CustomSpotifyIcon = () => (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_230_1052)">
        <path
          d="M8 0.5C3.575 0.5 0 4.08425 0 8.5C0 12.925 3.58425 16.5 8 16.5C12.425 16.5 16 12.9158 16 8.5C16 4.08425 12.4158 0.5 8 0.5ZM11.67 12.046C11.5267 12.285 11.2207 12.3518 10.9817 12.2085C9.09875 11.0615 6.738 10.8035 3.94675 11.4342C3.67925 11.4917 3.41175 11.3293 3.35425 11.0618C3.29675 10.7943 3.45925 10.5267 3.72675 10.4692C6.77575 9.77175 9.39425 10.0677 11.4972 11.3582C11.5539 11.392 11.6033 11.4366 11.6426 11.4895C11.682 11.5424 11.7105 11.6026 11.7265 11.6666C11.7424 11.7306 11.7456 11.7971 11.7358 11.8623C11.726 11.9275 11.7034 11.9901 11.6692 12.0465L11.67 12.046ZM12.645 9.86675C12.4635 10.163 12.081 10.2492 11.785 10.0767C9.6345 8.75775 6.356 8.3755 3.81375 9.14C3.47925 9.2355 3.13525 9.054 3.0395 8.729C2.944 8.3945 3.1255 8.0505 3.46 7.95475C6.3655 7.0755 9.9785 7.496 12.454 9.01575C12.7408 9.18775 12.8265 9.57 12.6453 9.8665L12.645 9.86675ZM12.731 7.59175C10.1502 6.0625 5.897 5.91925 3.431 6.66475C3.039 6.789 2.6185 6.55975 2.49425 6.16775C2.37 5.77575 2.59925 5.35525 2.99125 5.231C5.8205 4.371 10.523 4.54275 13.4862 6.3015C13.84 6.5115 13.9545 6.9705 13.7443 7.324C13.553 7.68725 13.0848 7.802 12.731 7.5915V7.59175Z"
          fill="#1ED760"
        />
      </g>
      <defs>
        <clipPath id="clip0_230_1052">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      <div className="flex flex-col w-[456px] gap-3 p-3 rounded-3xl bg-neutral-100">
        <Input ref={inputRef} type="text" placeholder="Search" />
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="task">Task</TabsTrigger>
            <TabsTrigger value="document">Document</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex flex-col gap-2">
          <h6 className="text-xs font-semibold text-neutral-400/50 px-3">
            Favorites
          </h6>
          <div className="flex flex-col rounded-xl w-full gap-2 p-1 bg-white">
            <LineItem
              icon={<DocumentIcon className="w-4 h-4" />}
              iconColor="#007AED"
              iconBgColor="#D5F0FF"
              text="Take note"
              shortcuts={["⌘", "T"]}
            />
            <LineItem
              icon={<DocumentPlusIcon className="w-4 h-4" />}
              iconColor="#FFC736"
              iconBgColor="#FFEEBA"
              text="Create document"
              shortcuts={["⌘", "N"]}
            />
            <LineItem
              icon={<UserPlusIcon className="w-4 h-4" />}
              iconColor="#FC5753"
              iconBgColor="#FDD6DB"
              text="Add contact"
              shortcuts={["⇧", "⌘", "A"]}
            />
            <LineItem
              icon={<EnvelopeIcon className="w-4 h-4" />}
              iconColor="#30D8FF"
              iconBgColor="#DBF8FD"
              text="Compose mail"
              shortcuts={["⌘", "A"]}
            />
            <LineItem
              icon={<CustomSpotifyIcon />}
              iconColor="#1ED760"
              iconBgColor="#CCFEE0"
              text="Play Spotify"
              shortcuts={["⌘", "S"]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-xs font-semibold text-neutral-400/50 px-3">
            Favorites
          </h6>
          <div className="flex flex-col rounded-xl w-full gap-2 p-1 bg-white">
            <LineItem
              icon={<Squares2X2Icon className="w-4 h-4" />}
              iconColor="#8B8B8B"
              iconBgColor="#E1E1E1"
              text="Dashboard"
              shortcuts={["D"]}
            />
            <LineItem
              icon={<Cog8ToothIcon className="w-4 h-4" />}
              iconColor="#8B8B8B"
              iconBgColor="#E1E1E1"
              text="Settings"
              shortcuts={["⇧", "⌘", "S"]}
            />
            <LineItem
              icon={<BellIcon className="w-4 h-4" />}
              iconColor="#8B8B8B"
              iconBgColor="#E1E1E1"
              text="Notifications"
              shortcuts={["⇧", "N"]}
            />
            <LineItem
              icon={<GlobeEuropeAfricaIcon className="w-4 h-4" />}
              iconColor="#8B8B8B"
              iconBgColor="#E1E1E1"
              text="Language & Region"
              shortcuts={["⌘", "L"]}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
