import LoginForm from "@/components/auth/login-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServerIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <Card className="w-[400px] shadow-xl">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
            <ServerIcon className="w-6 h-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            AWS Credentials Manager
          </CardTitle>
          <p className="text-sm text-muted-foreground text-center">
            Enter your credentials to access the dashboard
          </p>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}