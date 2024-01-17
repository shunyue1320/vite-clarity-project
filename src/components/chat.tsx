/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wk55PEZpSUK
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Chat() {
  return (
    <div key="1" className="flex h-screen w-screen bg-gray-100 dark:bg-gray-900">
      <aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 overflow-y-auto">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Online Users</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center space-x-3">
              <Avatar className="relative overflow-visible">
                <span className="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600" />
                <div className="overflow-hidden rounded-full">
                  <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </div>
              </Avatar>
              <span>John Doe</span>
            </li>
            <li className="flex items-center space-x-3">
              <Avatar className="relative overflow-visible">
                <span className="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600" />
                <div className="overflow-hidden rounded-full">
                  <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </div>
              </Avatar>
              <span>Jane Doe</span>
            </li>
            <li className="flex items-center space-x-3">
              <Avatar className="relative overflow-visible">
                <span className="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-red-600" />
                <div className="overflow-hidden rounded-full">
                  <AvatarImage alt="@robertsmith" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>RS</AvatarFallback>
                </div>
              </Avatar>
              <span>Robert Smith</span>
            </li>
          </ul>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Avatar>
                  <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-3">
                  <div className="text-sm font-semibold">John Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">10:24 AM</div>
                  <p className="mt-1">Hello everyone!</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Avatar>
                  <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-3">
                  <div className="text-sm font-semibold">Jane Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">10:26 AM</div>
                  <p className="mt-1">Hello John!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex space-x-3">
            <Input className="flex-1" placeholder="Type your message" />
            <Button>Send</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

