

export default function FooterCom() {
  return (
    <div className=" flex flex-col items-center border border-t-8  bg-black ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="flex gap-40 ml-20 justify-center items-center">
            <div>
              <h1 className="text-yellow-300 text-lg font-serif">Follow Us: </h1>
              <p className="text-yellow-300">Facebook</p>
              <p className="text-yellow-300">Twitter</p>
              <p className="text-yellow-300">Titok</p>
            </div>

            <div>
              <h1 className="text-yellow-300 text-lg font-serif">Service </h1>
              <p className="text-yellow-300">Flex muscle</p>
              <p className="text-yellow-300">Weight lifting</p>
            </div>

            <div>
              <h1 className="ttext-yellow-300 text-lg font-serif">Pricing: </h1>
              <p className="text-yellow-300">Basic</p>
              <p className="text-yellow-300">Premium</p>
              <p className="text-yellow-300">Golden</p>
            </div>

            <div>
              <h1 className="text-yellow-300 text-lg font-serif">Company: </h1>
              <div className="flex gap-2">

                <h1 className="text-yellow-300 gap-2">about us</h1>
              </div>
              <div className="flex gap-2">
       
                <h1 className="text-yellow-300 gap-2">Contact us</h1>
              </div>
            </div>

            <div>
              <h1 className="text-yellow-300 text-lg font-serif">Trainesrs: </h1>
             
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 text-yellow-300">
          <p>@compywirthuviersity.com</p>
        </div>
      </div>
    </div>
  );
}
