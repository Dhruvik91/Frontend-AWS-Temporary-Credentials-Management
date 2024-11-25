"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Download } from "lucide-react";

type AuditLog = {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  details: string;
};

export default function AuditLogs() {
  const [logs] = useState<AuditLog[]>([
    {
      id: "1",
      action: "Create Credential",
      user: "john.doe@example.com",
      timestamp: "2024-03-15 14:30:00",
      details: "Created console access for admin-user",
    },
    {
      id: "2",
      action: "Delete Credential",
      user: "john.doe@example.com",
      timestamp: "2024-03-15 14:15:00",
      details: "Deleted access key AKIA...",
    },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Audit Logs</h2>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Logs
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Action</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Timestamp</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log) => (
            <TableRow key={log.id}>
              <TableCell>{log.action}</TableCell>
              <TableCell>{log.user}</TableCell>
              <TableCell>{log.timestamp}</TableCell>
              <TableCell>{log.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}