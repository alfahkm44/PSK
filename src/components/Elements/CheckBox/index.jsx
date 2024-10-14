
const Checkbox = () => {
  return (
    <div className="mb-3">
                    <input
                      type="checkbox"
                      className="text-sm accent-primary" 
                      name="status"
                      id="status"
                    />
                    <label htmlFor="status" className="text-sm text-gray-500 ms-6"> {/* Ganti text-gray-01 dengan kelas yang terdefinisi */}
                      Keep me signed in
                    </label>
                  </div>
  )
}

export default Checkbox