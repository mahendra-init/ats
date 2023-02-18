import React from 'react'

const CollegeProfile = ({display, adminDetails}) => {
  if(display){
    return (
      <div>CollegeProfile
        <div className="flex space-x-10 mt-10 ml-10">
            <div class="grid grid-cols-[200px] gap-3 font-bold text-xl">
              <div>
                <label>College Name: </label>
              </div>
              <div>
                <label>Mobile Number: </label>
              </div>
              <div>
                <label>Email Id: </label>
              </div>
              <div>
                <label>Permanent Id: </label>
              </div>
            </div>
            <div class="grid grid-cols-[250px] gap-3">
              <div>
                <input
                  className="outline-none w-full"
                  value={adminDetails.collegeName}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={adminDetails.contactno}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={adminDetails.email}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={adminDetails.collgeUniqueID}
                />
              </div>
            </div>
          </div>
      </div>
      )
    }
}

export default CollegeProfile