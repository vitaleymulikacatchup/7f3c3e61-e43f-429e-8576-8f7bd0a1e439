"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { BarChart3, BookOpen, Crown, Gamepad2, HelpCircle, MessageSquare, Newspaper, Sparkles, Target, Twitch, Twitter, Users, Youtube, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="floatingGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {"name":"Home","id":"hero"},
            {"name":"Guides","id":"feature"},
            {"name":"Reviews","id":"testimonial"},
            {"name":"About","id":"about"},
            {"name":"Contact","id":"contact"}
          ]}
          brandName="GameGuide Pro"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Master Every Game"
          description="Expert gaming guides, strategies, and reviews to level up your gameplay across all genres and platforms"
          tag="Pro Gaming"
          tagIcon={Gamepad2}
          mediaItems={[
            {"imageSrc":"https://pixabay.com/get/ga3df8075a8f2a40dd80fce0cbef1d8bebba6204863ca8091b51c91b7906b6e4da5e45413ba11c25244610d127dad27f1bc872fae18465e605ec445445dca7b8d_1280.jpg","imageAlt":"Professional gaming setup"},
            {"imageSrc":"https://pixabay.com/get/gef572b09eb7bb0b0a2ab4a7944783d8a72d5fccf51024bad9ac7505aaae4acd127b99965ab99cea1364c564048480b94997fecea57403efbdbd5131b41ec1ccf_1280.jpg","imageAlt":"Gaming strategy guide"},
            {"imageSrc":"https://pixabay.com/get/gc6ecc26267a2a1c46caa701a5f8d70247462e993f62b4ffc42e071f351c4e8bd66537eaff664e6315c930516f939ea610d6a5d67acf79613fed008bbc955291e_1280.jpg","imageAlt":"Gaming equipment setup"},
            {"imageSrc":"https://pixabay.com/get/g1e01795d32c866656800321419f80a70a1a75d9e72922e68aa86bf57d154dfa4a0ef5b32a1350bc37e7a7cf1026e5fe36ab63ea941f0083659223a8e8bf0a990_1280.jpg","imageAlt":"Esports tournament"},
            {"imageSrc":"https://pixabay.com/get/gc8d0b054fa82b742f9791f079260361a86356ac00903ebb65821e112b9ea82eaacd21e7f19e56020a592c43a76a405dd30ecfcdb1afe2ca8f56665ff91d23f9e_1280.jpg","imageAlt":"Gaming streaming setup"}
          ]}
          buttons={[
            {"text":"Browse Guides","href":"feature"},
            {"text":"Join Community","href":"contact"}
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Mission"
          description="At GameGuide Pro, we're passionate gamers who understand the competitive edge. Our expert team combines years of professional gaming experience with in-depth analysis to deliver the most comprehensive guides, reviews, and strategies that help players dominate their favorite games."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Expert Gaming Guides"
          description="Comprehensive guides covering strategies, tips, and advanced techniques for all major games"
          tag="Guides"
          tagIcon={BookOpen}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {"title":"Strategy Guides","description":"Deep-dive strategies for competitive gameplay, character builds, and winning tactics","imageSrc":"https://pixabay.com/get/gef572b09eb7bb0b0a2ab4a7944783d8a72d5fccf51024bad9ac7505aaae4acd127b99965ab99cea1364c564048480b94997fecea57403efbdbd5131b41ec1ccf_1280.jpg","imageAlt":"Strategy guide screenshot","button":{"text":"Read More","href":"#"}},
            {"title":"Equipment Reviews","description":"Professional reviews of gaming hardware, peripherals, and setup optimization","imageSrc":"https://pixabay.com/get/gc6ecc26267a2a1c46caa701a5f8d70247462e993f62b4ffc42e071f351c4e8bd66537eaff664e6315c930516f939ea610d6a5d67acf79613fed008bbc955291e_1280.jpg","imageAlt":"Gaming equipment","button":{"text":"View Reviews","href":"#"}},
            {"title":"Esports Training","description":"Pro-level training guides for competitive gaming and tournament preparation","imageSrc":"https://pixabay.com/get/g1e01795d32c866656800321419f80a70a1a75d9e72922e68aa86bf57d154dfa4a0ef5b32a1350bc37e7a7cf1026e5fe36ab63ea941f0083659223a8e8bf0a990_1280.jpg","imageAlt":"Esports training","button":{"text":"Start Training","href":"#"}},
            {"title":"Streaming Guides","description":"Complete guides for gaming content creation, streaming setup, and audience building","imageSrc":"https://pixabay.com/get/gc8d0b054fa82b742f9791f079260361a86356ac00903ebb65821e112b9ea82eaacd21e7f19e56020a592c43a76a405dd30ecfcdb1afe2ca8f56665ff91d23f9e_1280.jpg","imageAlt":"Streaming setup","button":{"text":"Learn More","href":"#"}}
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Premium Guide Collection"
          description="Access our exclusive library of in-depth gaming guides and expert strategies"
          tag="Premium"
          tagIcon={Crown}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {"id":"ultimate-fps-guide","name":"Ultimate FPS Mastery","price":"$29.99","imageSrc":"https://pixabay.com/get/ge5e47897c31380727140436b65e9893c705d2d8bfd6b7d83c9a6fe52c67ac4b7d80bcaaff07f859ed2567bdae18f05994d4fd6d3b1f0c8dc236793751c19064e_1280.jpg","imageAlt":"FPS gaming guide","onProductClick":"() => window.open('https://example.com', '_blank')"},
            {"id":"moba-strategy-guide","name":"MOBA Strategy Bible","price":"$24.99","imageSrc":"https://pixabay.com/get/g40f71dc2c3c3dc5b55ac9bc20398d56dd85f4b01eecd63d30809444029393bbf9d997f49b77f937810c930a5c3f06cb0921781b8259aba59a5cc44a8bc011c3c_1280.jpg","imageAlt":"MOBA strategy guide","onProductClick":"() => window.open('https://example.com', '_blank')"},
            {"id":"streaming-success","name":"Streaming Success Course","price":"$39.99","imageSrc":"https://pixabay.com/get/g6094ee7b2746ca564424df214fc6af519e8da375c653f324d7a0eb8262ee4b219c8843d5df5fe2de5892bf21d0128694739deb72878d6ba0725f95ca0bd0a24e_1280.jpg","imageAlt":"Streaming guide course","onProductClick":"() => window.open('https://example.com', '_blank')"}
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Gaming Plan"
          description="Select the perfect plan to access our comprehensive gaming guides and community"
          tag="Plans"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {"id":"free","price":"Free","name":"Casual Gamer","features":["Basic guides access","Community forum","Weekly tips","Email support"],"buttons":[{"text":"Get Started","href":"#"},{"text":"Learn More","href":"#"}]},
            {"id":"pro","badge":"Most Popular","badgeIcon":Sparkles,"price":"$9.99/month","name":"Pro Gamer","features":["All premium guides","Priority support","Exclusive content","Direct expert access","Advanced strategies"],"buttons":[{"text":"Go Pro","href":"#"},{"text":"Free Trial","href":"#"}]},
            {"id":"elite","price":"$19.99/month","name":"Elite Champion","features":["Everything in Pro","1-on-1 coaching","Custom strategies","Tournament prep","VIP community access"],"buttons":[{"text":"Join Elite","href":"#"},{"text":"Contact Sales","href":"#"}]}
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Gaming Impact"
          description="Trusted by gamers worldwide to improve their skills and dominate the competition"
          tag="Stats"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {"id":"1","value":"50K+","title":"Gamers","description":"Active community members improving their skills","icon":"Users"},
            {"id":"2","value":"200+","title":"Guides","description":"Expert gaming guides across all genres","icon":"BookOpen"},
            {"id":"3","value":"95%","title":"Success Rate","description":"Players report improved gameplay after following our guides","icon":"Target"},
            {"id":"4","value":"24/7","title":"Support","description":"Round-the-clock community and expert assistance","icon":"Clock"}
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Gaming Experts"
          description="Professional gamers and industry veterans dedicated to helping you succeed"
          tag="Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {"id":"1","name":"Alex Chen","role":"Pro Strategist","imageSrc":"https://pixabay.com/get/g32b460360ac500cbd988ea37f305f716be56deb20a56bc0749205f0f2fa47c58055f885200ae98540f32061ed4c0bc0f2b5ac2f4e029b720f944c8efd1cf4ef0_1280.jpg","imageAlt":"Alex Chen - Gaming Expert"},
            {"id":"2","name":"Sarah Kim","role":"Content Strategy Lead","imageSrc":"https://pixabay.com/get/ga65a3c9ab2cc6b1e435a258704ed97f02b7f895e61f47d5d68fdffc91ea1a889c4fa0bf4251454a9e7758b35682aae26_1280.jpg","imageAlt":"Sarah Kim - Content Expert"}
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Gamers Say"
          description="Real feedback from our community of successful gamers"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {"id":"1","name":"Marcus Rodriguez","role":"Competitive FPS Player","testimonial":"GameGuide Pro completely transformed my gameplay. The FPS strategies helped me climb from Gold to Diamond in just two months. The detailed guides are incredibly well-researched and practical.","imageSrc":"https://pixabay.com/get/g05359dcf630005812dd1485cf87ec37385b91aca435791f9bee65f0ed51d3645eda34b16b046fb6aecc33cbce603e2b6d10afd81347f83b8a3254a5e8f2d4050_1280.jpg","imageAlt":"Marcus Rodriguez"},
            {"id":"2","name":"Sarah Kim","role":"Esports Streamer","testimonial":"The streaming guides here are gold! I went from 50 viewers to over 2000 followers using their content creation strategies. The community support is amazing too.","imageSrc":"https://pixabay.com/get/ga65a3c9ab2cc6b1e435a258704ed97f02b7f895e61f47d5d68fdffc91ea1a889c4fa0bf4251454a9e7758b35682aae26_1280.jpg","imageAlt":"Sarah Kim"},
            {"id":"3","name":"David Thompson","role":"MOBA Enthusiast","testimonial":"I've been stuck in the same rank for months until I found these guides. The MOBA strategy content is next level - detailed character builds and team composition guides that actually work.","imageSrc":"https://pixabay.com/get/gf8ad41d5ec2d780c726c1157d8166fac8eb92337f1a4183ff85c700d2d80f8e0d62255ca8ecb99ee2989b5f73f33b08e6ce8f3802bed417d172670400211edc2_1280.jpg","imageAlt":"David Thompson"},
            {"id":"4","name":"Jessica Wu","role":"Gaming Coach","testimonial":"As a coach, I recommend GameGuide Pro to all my students. The quality of their guides and the depth of strategy analysis is unmatched in the gaming education space.","imageSrc":"https://pixabay.com/get/g1a99baddd4a8e077091015da52af7dd913ec81a9d748bb66d891a808df204410a2a7e47e840badb832d5a375f940e43f23865255640533a4c3ee5e7f9348a9cc_1280.jpg","imageAlt":"Jessica Wu"}
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Gaming Platforms"
          description="Partnered with leading gaming platforms and hardware manufacturers"
          tag="Partners"
          tagIcon={Target}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g453c2e3155577bd1e55843a053e7c03669e4a9b7aa60e8a9f53942e2270eb93e7720870057e16428b00bcabd095999a26856dbc3ec86b9395791358186499013_1280.jpg",
            "https://pixabay.com/get/g973ec418efa42138c8b21d9dd54470f0a2cecdb286bfd7598ceb27f5e15141de2ca123e78042a0f56c8cfe6268a81c01d7018664df16f35f2a19fc035893fc27_1280.jpg",
            "https://pixabay.com/get/g12483f91864244a6061dac693702abf231c1bfd1903b03300fdbf45a074f5fd92e28615cb51186c276f0fbf999375817848c5ad0b9ffe5273d8f1fb96f42206b_1280.jpg",
            "https://pixabay.com/get/g2c87140734d273e6c91b7b96097ef2658f0d92ddf9507a20ce327863e1c4d8099cdf32926351550330b8f1d80de2063b4459791c043f6c62ea42c60d9c5b5aa1_1280.jpg",
            "https://pixabay.com/get/gf82edae2b21f00e61dfa9cc5b3131414e68b0a2e8b072b4c8d8c6f56b99c466043060bb19ab9f1710a01a4d1a5d645a4f7c353120f0ebe7ccaa1f50db31370b4_1280.jpg",
            "https://pixabay.com/get/g883122393bad4b639b2c41bdece4b0708a4def9c9294a0545cf58f4193583b9c91bc40b82fc2fa6388a9c6168ad46a625c002e6528229fd23f9b0b1cdb738e50_1280.jpg",
            "https://pixabay.com/get/g442722db18e1abd1dee6d6c0930f56f045cd20284023cecdc2d445f83b77dc4e2494f7bfe942937be708efe99bfef3fa551ae0a996466c3947167781c0dd0c90_1280.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Common questions about our gaming guides and community"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          faqs={[
            {"id":"1","title":"Are the guides suitable for beginners?","content":"Absolutely! Our guides cater to all skill levels, from complete beginners to professional players. Each guide clearly indicates the difficulty level and prerequisites."},
            {"id":"2","title":"How often are the guides updated?","content":"We update our guides regularly to reflect game patches, meta changes, and new strategies. Major updates are released monthly, with minor adjustments made weekly."},
            {"id":"3","title":"Can I access guides on mobile devices?","content":"Yes! Our platform is fully optimized for mobile devices, tablets, and desktops. You can access all guides and community features on any device."},
            {"id":"4","title":"Do you offer refunds?","content":"We offer a 30-day money-back guarantee for all premium subscriptions. If you're not satisfied with the content, you can request a full refund within 30 days."},
            {"id":"5","title":"How do I contact support?","content":"You can reach our support team through the contact form, email at support@gameguidepro.com, or via our Discord community server for immediate assistance."}
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Gaming Content"
          description="Stay updated with the latest gaming news, tips, and industry insights"
          tag="Blog"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {"id":"1","category":"Tips","title":"10 Essential Gaming Tips for 2024","excerpt":"Master these fundamental gaming techniques that will improve your performance across all genres and platforms","imageSrc":"https://pixabay.com/get/g5803676a28231486f48a5ec41ffa3e71b7157084597e8d1a7abea53ca12cc0e23c751081f248d0d7f1d54a55240141b3d41daed5ceceb80f21fd5008c5ea9adc_1280.jpg","imageAlt":"Gaming tips tutorial","authorName":"Alex Chen","authorAvatar":"https://pixabay.com/get/g32b460360ac500cbd988ea37f305f716be56deb20a56bc0749205f0f2fa47c58055f885200ae98540f32061ed4c0bc0f2b5ac2f4e029b720f944c8efd1cf4ef0_1280.jpg","date":"15 Jan 2024","onBlogClick":"() => console.log('Blog clicked')"},
            {"id":"2","category":"Esports","title":"The Rise of Mobile Esports","excerpt":"How mobile gaming is reshaping the competitive esports landscape and what it means for players","imageSrc":"https://pixabay.com/get/g8c76897878f79bd589ae7710a693e31519cc0230e7bde220f1137a3ae6a8e553fff7a9d82708804dc76c2b17659871f0d9bc5dda82d376145e21c85fc2b6d859_1280.jpg","imageAlt":"Mobile esports competition","authorName":"Sarah Kim","authorAvatar":"https://pixabay.com/get/ga65a3c9ab2cc6b1e435a258704ed97f02b7f895e61f47d5d68fdffc91ea1a889c4fa0bf4251454a9e7758b35682aae26_1280.jpg","date":"12 Jan 2024","onBlogClick":"() => console.log('Blog clicked')"},
            {"id":"3","category":"Reviews","title":"Best Gaming Hardware of 2024","excerpt":"Our comprehensive review of the top gaming peripherals, graphics cards, and accessories for serious gamers","imageSrc":"https://pixabay.com/get/g495e8b21e2420bf080625819d371553e8b1bf9a3176aeb749c21317ce125396ca3d0d40f224a80e3e420cfe0bf7dd7d1fdd13a74cb445ca1a0b2a24caf4aeb80_1280.jpg","imageAlt":"Gaming hardware review","authorName":"David Thompson","authorAvatar":"https://pixabay.com/get/gf8ad41d5ec2d780c726c1157d8166fac8eb92337f1a4183ff85c700d2d80f8e0d62255ca8ecb99ee2989b5f73f33b08e6ce8f3802bed417d172670400211edc2_1280.jpg","date":"10 Jan 2024","onBlogClick":"() => console.log('Blog clicked')"}
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Join the Gaming Community"
          description="Ready to level up your gaming skills? Get in touch with our expert team and start your journey to gaming mastery."
          inputs={[
            {"name":"name","type":"text","placeholder":"Your Gaming Name","required":true},
            {"name":"email","type":"email","placeholder":"Email Address","required":true},
            {"name":"games","type":"text","placeholder":"Favorite Games","required":false}
          ]}
          textarea={{"name":"message","placeholder":"Tell us about your gaming goals and which areas you'd like to improve...","rows":5,"required":true}}
          buttonText="Join Community"
          onSubmit={(data) => console.log('Contact form submitted:', data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="GameGuide Pro"
          copyrightText="© 2024 GameGuide Pro. All rights reserved."
          columns={[
            {"title":"Guides","items":[{"label":"Strategy Guides","href":"feature"},{"label":"Equipment Reviews","href":"product"},{"label":"Esports Training","href":"#"},{"label":"Streaming Tips","href":"#"}]},
            {"title":"Community","items":[{"label":"Discord Server","href":"https://discord.com"},{"label":"Forum","href":"#"},{"label":"Leaderboards","href":"#"},{"label":"Tournaments","href":"#"}]},
            {"title":"Support","items":[{"label":"FAQ","href":"faq"},{"label":"Contact","href":"contact"},{"label":"Help Center","href":"#"},{"label":"Bug Reports","href":"#"}]},
            {"title":"Company","items":[{"label":"About","href":"about"},{"label":"Team","href":"team"},{"label":"Blog","href":"blog"},{"label":"Careers","href":"#"}]}
          ]}
          socialLinks={[
            {"icon":MessageSquare,"href":"https://discord.com","ariaLabel":"Discord"},
            {"icon":Youtube,"href":"https://youtube.com","ariaLabel":"YouTube"},
            {"icon":Twitter,"href":"https://twitter.com","ariaLabel":"Twitter"},
            {"icon":Twitch,"href":"https://twitch.tv","ariaLabel":"Twitch"}
          ]}
        />
      </div>
    </ThemeProvider>
  );
}