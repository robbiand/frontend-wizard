import React, { useState } from 'react'

type FileUploadProps = {
  onChange: (base64:string|null) => void;
}

const FileUpload = ({ onChange }: FileUploadProps) => {
  const [preview, setPreview] = useState<string|null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      const result = String(reader.result)
      setPreview(result)
      onChange(result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="mb-4">
      <input
        type="file"
        accept="image/*"
        onChange={ handleChange }
      />
      { preview && (
        <img src={preview} alt="preview" className="mt-2 w-24 h-24 object-cover rounded" />
      )}
    </div>
  )
}

export default FileUpload
