import { useState, ChangeEvent, FormEvent, FC } from "react";

interface GuestBookFormProps {
  onSubmit: (form: { name: string; message: string }) => void;
}

const GuestBookForm: FC<GuestBookFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="my-8">
      <div className="mb-4">
        <label className="block text-gray-700">Nama</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Doa</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Kirim
      </button>
    </form>
  );
};

export default GuestBookForm;
