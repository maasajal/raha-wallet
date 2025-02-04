import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const RequestToOpenAccount = () => {
  const axiosSecure = useAxiosSecure();

  const { data: accountOpen = [], refetch } = useQuery({
    queryKey: ["account-open"],
    queryFn: async () => {
      const res = await axiosSecure.get("/account-open", {
        params: { status: "pending" },
      });
      return res.data;
    },
  });

  const handleAccept = async (account) => {
    try {
      // Change the user status
      await axiosSecure.patch(`/account-approve/${account.email}`);
      refetch();
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleDelete = async (account) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await axiosSecure.delete(
              `/account-delete/${account._id}`
            );
            if (res.data.deletedCount > 0) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account delete successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              console.log("Account delete successfully!");
              refetch();
            }
          } catch (error) {
            console.log("error", error);
          }
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div className="text-center py-10">
        <h2 className="text-3xl md:text-5xl font-bold font-Montserrat">Manage Account Open Request</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>Email & Mobile No.</th>
              <th>Role</th>
              <th>Open</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {accountOpen.length > 0 ? (
              <>
                {accountOpen.map((account, index) => (
                  <tr key={account._id} className="hover">
                    <th>{index + 1}</th>
                    <td>
                      <div className="font-bold">{account.name}</div>
                    </td>
                    <td>
                      {account.email}
                      <br />
                      {account.mobile}
                    </td>
                    <td>{account.role.toUpperCase()}</td>
                    <td>
                      <button
                        onClick={() => handleAccept(account)}
                        className="btn btn-outline"
                      >
                        Accept
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(account)}
                        className="btn btn-outline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                <td className="text-center">No account Request found!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RequestToOpenAccount;
