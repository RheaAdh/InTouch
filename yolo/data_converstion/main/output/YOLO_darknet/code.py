filenames = []
for i in range(1, 31):
    filenames.append("img"+str(i)+".txt")
i = 1
with open("output_file.txt", "w") as outfile:

    for filename in filenames:
        with open(filename) as infile:
            contents = infile.read()
            nums = [float(n) for n in contents.split(" ")]
            print(nums)
            te = ""
            if i <= 10:
                te = "\nTEST"+str(nums)
            elif i <= 20:
                te = "\nTRAIN"+str(nums)
            else:
                te = "\nVALIDATE"+str(nums)
            i += 1
            outfile.write(te)
