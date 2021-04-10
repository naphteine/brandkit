import argparse
import random

# get_random_line method takes readlines() output and retuns random, single, stripped line
def get_random_line(lines):
    return lines[random.randrange(len(lines))].rstrip()

# Main
if __name__ == "__main__":
    # Handle arguments
    parser = argparse.ArgumentParser("probable-octo-broccoli")
    parser.add_argument('-c', '--count', help="Count of names to generate. Default is 10.", type=int, default=10)
    parser.add_argument('-fn', '--nouns', help="Nouns file. Default is 'nouns.txt'", type=open, default="nouns.txt")
    parser.add_argument('-fa', '--adjectives', help="Adjective file. Default is 'adjectives.txt'", type=open, default="adjectives.txt")
    args = parser.parse_args()

    # Read files
    nouns = args.nouns.readlines()
    adjectives = args.adjectives.readlines()

    # Print random lines
    for i in range(args.count):
        print(get_random_line(adjectives) + "-" + get_random_line(nouns))