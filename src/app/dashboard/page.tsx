import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Calendar } from "@/components/ui/calendar"


export default function dashboardPage() {
  return (
        <main className="h-full flex justify-center items-center flex-col">
        <div>Dashboard</div>
        <button className="px-6 py-2 my-3 bg-blue-500 rounded text-gray-50 hover:bg-blue-700">Submit</button>
        <Button variant="default">Shadcn Button</Button>
        <div>
        <AlertDialog>
        <AlertDialogTrigger className="my-5 border-2 px-5 py-2 rounded">Open Alert</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
      </AlertDialog>

        </div>
        </main>
  )
}
