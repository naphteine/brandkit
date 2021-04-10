import argparse
import random

def get_rline(file_name):
    word = ""
    
    with open(file_name, "r") as line_file:
        lines = line_file.readlines()
        word = lines[random.randrange(len(lines))]
        
    return word.rstrip()

if __name__ == "__main__":
    # Handle arguments
    parser = argparse.ArgumentParser("probable-octo-broccoli")
    parser.add_argument('-c', '--count', help="Count of names to generate. Default is 10.", type=int, default=10)
    args = parser.parse_args()

    # Do things
    nouns = "nouns.txt"
    adjectives = "adjectives.txt"

    for i in range(args.count):
        name = get_rline(adjectives) + "-" + get_rline(nouns)
        print(name)