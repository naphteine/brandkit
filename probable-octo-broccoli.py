import random

def get_rline(file_name):
    word = ""
    
    with open(file_name, "r") as line_file:
        lines = line_file.readlines()
        word = lines[random.randrange(len(lines))]
        
    return word.rstrip()

def main():
    nouns = "nouns.txt"
    adjectives = "adjectives.txt"

    for i in range(10):
        name = get_rline(adjectives) + "-" + get_rline(nouns)
        print(name)

main()
