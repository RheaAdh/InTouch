filenames = []
for i in range(1, 31):
    filenames.append("img"+str(i)+".txt")
i = 1
with open("output_file.txt", "w") as outfile:

    for filename in filenames:
        with open(filename) as infile:
            contents = infile.read()
            nums = [float(n) for n in contents.split(" ")]
            temp = ""
            for j in range(1, len(nums)):
                temp = temp+str(nums[j])+","
            te = ""
            if i <= 10:
                te = "\nTEST,PATH,camera,"+temp
            elif i <= 20:
                te = "\nTRAIN,PATH,camera,"+temp
            else:
                te = "\nVALIDATE,PATH,camera,"+temp
            i += 1
            outfile.write(te)
