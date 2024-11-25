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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { PlusCircle, Key, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Credential = {
  id: string;
  type: "console" | "programmatic";
  username: string;
  created: string;
  expires: string;
};

export default function CredentialsTable() {
  const { toast } = useToast();
  const [credentials] = useState<Credential[]>([
    {
      id: "1",
      type: "console",
      username: "admin-console",
      created: "2024-03-15",
      expires: "2024-03-16",
    },
    {
      id: "2",
      type: "programmatic",
      username: "api-user",
      created: "2024-03-14",
      expires: "2024-04-14",
    },
  ]);

  const handleDelete = (id: string) => {
    toast({
      title: "Credential deleted",
      description: "The credential has been successfully deleted.",
    });
  };

  const handleCreate = (type: "console" | "programmatic") => {
    toast({
      title: "Credential created",
      description: "New credential has been generated successfully.",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Active Credentials</h2>
        <div className="space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Credential
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Credential</DialogTitle>
                <DialogDescription>
                  Choose the type of credential you want to create.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    className="col-span-3"
                    placeholder="Enter username"
                  />
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <Button
                  variant="secondary"
                  onClick={() => handleCreate("console")}
                >
                  Create Console Access
                </Button>
                <Button onClick={() => handleCreate("programmatic")}>
                  Create Access Key
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Expires</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {credentials.map((credential) => (
            <TableRow key={credential.id}>
              <TableCell>
                <div className="flex items-center">
                  <Key className="mr-2 h-4 w-4" />
                  {credential.type === "console"
                    ? "Console Access"
                    : "Access Key"}
                </div>
              </TableCell>
              <TableCell>{credential.username}</TableCell>
              <TableCell>{credential.created}</TableCell>
              <TableCell>{credential.expires}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(credential.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}