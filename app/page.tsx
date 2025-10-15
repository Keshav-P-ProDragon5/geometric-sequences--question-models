import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, Lightbulb } from "lucide-react"

export default function GeometricSequencesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <Calculator className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-card-foreground">Geometric Sequences</h1>
              <p className="text-sm text-muted-foreground">Master the fundamentals with worked examples</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-balance text-foreground">Understanding Geometric Sequences</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              A geometric sequence is a sequence where each term after the first is found by multiplying the previous
              term by a fixed, non-zero number called the common ratio (r).
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent/10 px-6 py-3">
              <span className="text-lg font-mono font-semibold text-accent-foreground">
                a<sub>n</sub> = a<sub>1</sub> · r<sup>n-1</sup>
              </span>
            </div>
          </div>
        </section>

        {/* Key Concepts */}
        <section className="mb-16">
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-6 text-2xl font-bold text-foreground">Key Concepts</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">First Term (a₁)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">The starting value of the sequence</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Common Ratio (r)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    The constant multiplier between consecutive terms
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">nth Term (aₙ)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Any term in the sequence at position n
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Worked Problems */}
        <section className="mb-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">Worked Example Problems</h3>
            </div>

            {/* Problem 1 */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Problem 1: Finding the nth Term</CardTitle>
                    <CardDescription className="mt-2">
                      Find the 8th term of the geometric sequence: 3, 6, 12, 24, ...
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Basic</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-3 font-semibold text-foreground">Solution:</h4>

                  <div className="space-y-3 text-sm leading-relaxed">
                    <div>
                      <p className="mb-2 font-medium text-foreground">
                        Step 1: Identify the first term and common ratio
                      </p>
                      <p className="text-muted-foreground">
                        First term: a<sub>1</sub> = 3
                      </p>
                      <p className="text-muted-foreground">Common ratio: r = 6/3 = 2</p>
                    </div>

                    <div>
                      <p className="mb-2 font-medium text-foreground">Step 2: Use the formula for the nth term</p>
                      <p className="text-muted-foreground">
                        Formula: a<sub>n</sub> = a<sub>1</sub> · r<sup>n-1</sup>
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 font-medium text-foreground">Step 3: Substitute the values</p>
                      <p className="text-muted-foreground">
                        a<sub>8</sub> = 3 · 2<sup>8-1</sup>
                      </p>
                      <p className="text-muted-foreground">
                        a<sub>8</sub> = 3 · 2<sup>7</sup>
                      </p>
                      <p className="text-muted-foreground">
                        a<sub>8</sub> = 3 · 128
                      </p>
                    </div>

                    <div className="rounded-md bg-primary/10 p-3">
                      <p className="font-semibold text-primary">
                        Answer: a<sub>8</sub> = 384
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problem 2 */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Problem 2: Finding the Common Ratio</CardTitle>
                    <CardDescription className="mt-2">
                      The 3rd term of a geometric sequence is 20 and the 6th term is 160. Find the common ratio.
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Intermediate</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-3 font-semibold text-foreground">Solution:</h4>

                  <div className="space-y-3 text-sm leading-relaxed">
                    <div>
                      <p className="mb-2 font-medium text-foreground">Step 1: Write equations for both terms</p>
                      <p className="text-muted-foreground">
                        a<sub>3</sub> = a<sub>1</sub> · r<sup>2</sup> = 20
                      </p>
                      <p className="text-muted-foreground">
                        a<sub>6</sub> = a<sub>1</sub> · r<sup>5</sup> = 160
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 font-medium text-foreground">
                        Step 2: Divide the second equation by the first
                      </p>
                      <p className="text-muted-foreground">
                        (a<sub>1</sub> · r<sup>5</sup>) / (a<sub>1</sub> · r<sup>2</sup>) = 160/20
                      </p>
                      <p className="text-muted-foreground">
                        r<sup>3</sup> = 8
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 font-medium text-foreground">Step 3: Solve for r</p>
                      <p className="text-muted-foreground">r = ∛8</p>
                      <p className="text-muted-foreground">r = 2</p>
                    </div>

                    <div className="rounded-md bg-primary/10 p-3">
                      <p className="font-semibold text-primary">Answer: The common ratio is r = 2</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problem 3 */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Problem 3: Sum of Geometric Sequence</CardTitle>
                    <CardDescription className="mt-2">
                      Find the sum of the first 6 terms of the geometric sequence: 5, 10, 20, 40, ...
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Advanced</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-3 font-semibold text-foreground">Solution:</h4>

                  <div className="space-y-3 text-sm leading-relaxed">
                    <div>
                      <p className="mb-2 font-medium text-foreground">
                        Step 1: Identify the first term and common ratio
                      </p>
                      <p className="text-muted-foreground">
                        First term: a<sub>1</sub> = 5
                      </p>
                      <p className="text-muted-foreground">Common ratio: r = 10/5 = 2</p>
                      <p className="text-muted-foreground">Number of terms: n = 6</p>
                    </div>

                    <div>
                      <p className="mb-2 font-medium text-foreground">
                        Step 2: Use the sum formula for geometric sequences
                      </p>
                      <p className="text-muted-foreground">
                        Formula: S<sub>n</sub> = a<sub>1</sub> · (r<sup>n</sup> - 1) / (r - 1) when r ≠ 1
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 font-medium text-foreground">Step 3: Substitute the values</p>
                      <p className="text-muted-foreground">
                        S<sub>6</sub> = 5 · (2<sup>6</sup> - 1) / (2 - 1)
                      </p>
                      <p className="text-muted-foreground">
                        S<sub>6</sub> = 5 · (64 - 1) / 1
                      </p>
                      <p className="text-muted-foreground">
                        S<sub>6</sub> = 5 · 63
                      </p>
                      <p className="text-muted-foreground">
                        S<sub>6</sub> = 315
                      </p>
                    </div>

                    <div className="rounded-md bg-primary/10 p-3">
                      <p className="font-semibold text-primary">
                        Answer: The sum of the first 6 terms is S<sub>6</sub> = 315
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problem 4 - Bonus */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Problem 4: Real-World Application</CardTitle>
                    <CardDescription className="mt-2">
                      A bacteria culture doubles every hour. If there are initially 100 bacteria, how many will there be
                      after 5 hours?
                    </CardDescription>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">Application</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-3 font-semibold text-foreground">Solution:</h4>

                  <div className="space-y-3 text-sm leading-relaxed">
                    <div>
                      <p className="mb-2 font-medium text-foreground">Step 1: Identify the geometric sequence</p>
                      <p className="text-muted-foreground">
                        Initial amount: a<sub>1</sub> = 100 bacteria
                      </p>
                      <p className="text-muted-foreground">Common ratio: r = 2 (doubles each hour)</p>
                      <p className="text-muted-foreground">
                        We need to find: a<sub>6</sub> (after 5 hours, we're at the 6th term)
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 font-medium text-foreground">Step 2: Apply the nth term formula</p>
                      <p className="text-muted-foreground">
                        a<sub>n</sub> = a<sub>1</sub> · r<sup>n-1</sup>
                      </p>
                      <p className="text-muted-foreground">
                        a<sub>6</sub> = 100 · 2<sup>6-1</sup>
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 font-medium text-foreground">Step 3: Calculate</p>
                      <p className="text-muted-foreground">
                        a<sub>6</sub> = 100 · 2<sup>5</sup>
                      </p>
                      <p className="text-muted-foreground">
                        a<sub>6</sub> = 100 · 32
                      </p>
                      <p className="text-muted-foreground">
                        a<sub>6</sub> = 3200
                      </p>
                    </div>

                    <div className="rounded-md bg-primary/10 p-3">
                      <p className="font-semibold text-primary">Answer: After 5 hours, there will be 3,200 bacteria</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-16">
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-6 text-2xl font-bold text-foreground">Quick Reference Formulas</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-secondary p-4">
                    <h4 className="mb-2 font-semibold text-secondary-foreground">nth Term</h4>
                    <p className="font-mono text-sm text-secondary-foreground">
                      a<sub>n</sub> = a<sub>1</sub> · r<sup>n-1</sup>
                    </p>
                  </div>
                  <div className="rounded-lg bg-secondary p-4">
                    <h4 className="mb-2 font-semibold text-secondary-foreground">Sum of n Terms</h4>
                    <p className="font-mono text-sm text-secondary-foreground">
                      S<sub>n</sub> = a<sub>1</sub> · (r<sup>n</sup> - 1) / (r - 1)
                    </p>
                  </div>
                  <div className="rounded-lg bg-secondary p-4">
                    <h4 className="mb-2 font-semibold text-secondary-foreground">Common Ratio</h4>
                    <p className="font-mono text-sm text-secondary-foreground">
                      r = a<sub>n+1</sub> / a<sub>n</sub>
                    </p>
                  </div>
                  <div className="rounded-lg bg-secondary p-4">
                    <h4 className="mb-2 font-semibold text-secondary-foreground">Infinite Sum (|r| &lt; 1)</h4>
                    <p className="font-mono text-sm text-secondary-foreground">
                      S<sub>∞</sub> = a<sub>1</sub> / (1 - r)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Practice Tips */}
        <section>
          <div className="mx-auto max-w-4xl">
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6" />
                  <CardTitle className="text-xl">Tips for Success</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li>• Always identify the first term (a₁) and common ratio (r) before solving</li>
                  <li>• Check if the common ratio is consistent throughout the sequence</li>
                  <li>• Remember that n represents the position of the term, not the number of multiplications</li>
                  <li>• For word problems, carefully identify what represents the first term</li>
                  <li>• Practice recognizing geometric sequences in real-world contexts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">Master geometric sequences through practice and understanding</p>
        </div>
      </footer>
    </div>
  )
}
