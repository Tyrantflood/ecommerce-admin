import prismadb from "@/lib/prismadb";
import { ColorForm } from "./components/color-form";

const BillboardPage = async ({ params }: { params: { sizeId: string } }) => {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });
  return (
    <div className=" flex-col">
      <div className=" flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={size} />
      </div>
    </div>
  );
};

export default BillboardPage;
