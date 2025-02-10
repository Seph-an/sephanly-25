"use client";

import React, { useState } from "react";
import AlertDialog from "./AlertDialog";
import { ArrowRight } from "lucide-react";

// Main component that uses the alert dialog
const Quotation = ({ large }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  // Opens the dialog
  const openDialog = () => {
    setDialogOpen(true);
  };

  // Closes the dialog
  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <button
        onClick={openDialog}
        className={large ? `large-btn flex items-center gap-2` : `nav-btn`}
      >
        <span>{large ? "Get free quotation now" : "Get free quotation"}</span>
        {large && <ArrowRight color="#fff" size={24} strokeWidth={2} />}
      </button>

      <AlertDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
};

export default Quotation;
