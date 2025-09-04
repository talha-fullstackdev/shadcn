"use client"
import { useId, useMemo, useState } from "react"
import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const  OriginUIPage =()=> {
  const id = useId()
  const [password, setPassword] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible((prevState) => !prevState)

  const checkStrength = (pass) => {
    const requirements = [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /[0-9]/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
    ]

    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }))
  }

  const strength = checkStrength(password)

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length
  }, [strength])

  const getStrengthColor = (score) => {
    if (score === 0) return "bg-gray-200"
    if (score <= 1) return "bg-red-500"
    if (score <= 2) return "bg-orange-500"
    if (score === 3) return "bg-amber-500"
    return "bg-emerald-500"
  }

  const getStrengthText = (score) => {
    if (score === 0) return "Enter a password"
    if (score <= 2) return "Weak password"
    if (score === 3) return "Medium password"
    return "Strong password"
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      {/* Password input */}
      <div className="space-y-2">
        <Label htmlFor={id} className="text-sm font-semibold text-gray-700">
          Password
        </Label>
        <div className="relative">
          <Input
            id={id}
            className="pe-10 text-sm rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
            placeholder="Enter your password"
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby={`${id}-description`}
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            type="button"
            onClick={toggleVisibility}
            aria-label={isVisible ? "Hide password" : "Show password"}
            aria-pressed={isVisible}
          >
            {isVisible ? (
              <EyeOffIcon size={18} aria-hidden="true" />
            ) : (
              <EyeIcon size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Password strength bar */}
      <div
        className="mt-4 h-2 w-full rounded-full bg-gray-200 overflow-hidden"
        role="progressbar"
        aria-valuenow={strengthScore}
        aria-valuemin={0}
        aria-valuemax={4}
        aria-label="Password strength"
      >
        <div
          className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-in-out`}
          style={{ width: `${(strengthScore / 4) * 100}%` }}
        ></div>
      </div>

      {/* Strength description */}
      <p
        id={`${id}-description`}
        className="mt-2 text-sm font-medium text-gray-700"
      >
        {getStrengthText(strengthScore)}
        <span className="text-gray-500"> — must contain:</span>
      </p>

      {/* Requirements */}
      <ul className="mt-3 space-y-2">
        {strength.map((req, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm rounded-lg px-2 py-1 transition-colors"
          >
            {req.met ? (
              <CheckIcon
                size={16}
                className="text-emerald-500 shrink-0"
                aria-hidden="true"
              />
            ) : (
              <XIcon
                size={16}
                className="text-gray-400 shrink-0"
                aria-hidden="true"
              />
            )}
            <span
              className={`${
                req.met ? "text-emerald-600 font-medium" : "text-gray-500"
              }`}
            >
              {req.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default OriginUIPage