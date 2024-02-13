import pic from "../../assets/wallet/increase 1.png"
import low from "../../assets/wallet/data-transfer 1.png"
import high from "../../assets/wallet/increase 2.png"
function Wallet() {
  return (
    <div className="flex felx-row justify-center gap-4">
      <div className="bg-white h-[25vh] ">

<div className="flex items-center gap-3 border p-2 rounded-md bg-[#FFF0F3]">
<img src={pic} className="size-12"/>
<p className="text-xl font-bold">Inventory <br /> increase</p>
</div>

<div className="flex items-center gap-3 border p-2 rounded-md bg-[#FFF0F3]">
<img src={low} className="size-12"/>
<p className="text-xl font-bold">Inventory <br /> increase</p>
</div>

<div className="flex items-center gap-3 border p-2 rounded-md bg-[#FFF0F3]">
<img src={high} className="size-12"/>
<p className="text-xl font-bold">Inventory <br /> increase</p>
</div>


      </div>

      <div className="flex flex-col ">
        <div className="flex justify-between border ">
          <h4>balece of money </h4>
          <p>60$</p>
        </div>
        <div>
          <table>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>total</th>
            </tr>

            <tr>
              <td>#2546</td>
              <td>2022/02/01</td>
              <td>-$60 </td>
            </tr>

            <tr>
              <td>#2546</td>
              <td>2022/02/01</td>
              <td>+$60 </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
