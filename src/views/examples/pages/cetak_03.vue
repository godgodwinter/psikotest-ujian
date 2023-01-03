<template>
  <div class="p-10">
    <div
      class="max-w-full bg-white flex flex-col rounded overflow-hidden shadow-lg"
    >
      <div class="flex justify-center">
        <div class="flex flex-col w-full p-5 mx-auto card">
          <div class="flex flex-row justify-between">
            <div class="flex flex-col w-full mx-auto">
              <div class="flex flex-row">
                <h1 class="text-2xl">
                  PROOF OF DELIVERY (POD) # <small>45F128</small>
                </h1>
              </div>
              <div class="flex flex-row justify-between mt-3">
                <div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU4AAAAeAQMAAAB5ZGVpAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAD9JREFUOI3tyrEJACAMBEDh24eskgECri44QFYJfGuhc0jKgxsiZFRNr0wgyIrjtZWPHmetBM2gGF27du36Z72G5FJDYMX7jwAAAABJRU5ErkJggg=="
                    alt="barcode"
                  />
                  <br />
                  Issued on July 6, 2021
                </div>
              </div>
            </div>
            <div class="brand">
              <span
                class="flex items-center justify-center space-x-3 transition-all duration-1000 ease-out transform text-thumeza-500"
              >
                <img
                  class="w-28 h-28"
                  src="data:image/png;base64,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"
                />
              </span>
            </div>
          </div>

          <div class="mt-4 border-t-2 border-gray-200"></div>

          <div class="flex justify-between mt-3">
            <div class="flex flex-col">
              From
              <p class="">
                <strong>6710 Fife Avenue,Harare , ZW</strong><br />
                Zimbabwe<br />
                Harare<br />
                Harare City<br />
              </p>
            </div>
            <div class="flex flex-col">
              To
              <p class="">
                <strong>17e Rue Limete/Kin, Kinshasa</strong><br />
                Congo, Republic Democraric<br />
                Kinshasa<br />
                Kinshasa City<br />
              </p>
            </div>
            <div class="flex flex-col pr-4">
              Load ID #TZ236
              <p>Load Status: Delivered</p>
              <p>Shipper : Manasse Ngudia Manasseng</p>
              <p>Transporter : Lyord Frederickso</p>
              <p>
                Payment Type:Visa-card
                <br />
              </p>
              <p>Terms Of Payment: 50% uploading</p>
            </div>
          </div>
          <div class="mt-3">
            <table class="table w-full mt-3 table_striped">
              <thead>
                <tr>
                  <th class="ltr:text-left rtl:text-right"></th>
                  <th class="ltr:text-left rtl:text-right"></th>
                  <th class="ltr:text-left rtl:text-right"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Goods Type : No Perishable
                    <br />
                    Weight in Kg : 400 kg
                    <br />
                    Volume in Cubic Meter : 3.3
                    <br />
                    Estimated Value : 1560
                    <br />
                    Description: contains tools
                    <br />
                  </td>
                  <td>
                    Vehicule Type : Van 1Ton
                    <br />
                    Vehicule : -

                    <br />
                    Driver : -
                    <br />
                  </td>
                  <td>6700</td>
                </tr>
                <tr>
                  <td></td>
                  <td>TOTAL</td>
                  <td>6700 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex flex-row justify-end mt-8">
            <div class="">
              <div class="">
                <button
                  class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm printInvoice hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                >
                  <span class="mt-1 la la-download"></span>Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
