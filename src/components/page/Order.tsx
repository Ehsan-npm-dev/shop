
function Order() {
  return (
    <div className="border flex  pt-4 h-auto justify-center ">
      <div className="flex flex-col w-[1440px]   rounded-xl bg-[#FFF1F3] p-2 border h-[150px] mt-10 justify-center " >
      <table className="flex flex-col px-2">

<tr className="flex justify-between p-2 text-xl ">
  <th>Order</th>
  <th>Date</th>
  <th>Condition</th>
  <th>Total</th>
</tr>
  <hr />
<tr className="flex justify-between pt-2 text-xl p-2 font-semibold ">
  <td>#2546</td>
  <td>2022/02/01</td>
  <td>Awaiting review</td>
  <td>$60 </td>
</tr>

<hr/>
<tr className="flex justify-between p-2 text-xl font-semibold">
  <td>#2546</td>
  <td>2022/02/01</td>
  <td>Awaiting review</td>
  <td>$60 </td>
</tr>

      </table>
    </div>
    </div>
  )
}

export default Order
