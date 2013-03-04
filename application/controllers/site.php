<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Site extends CI_Controller {

	public function index() {
		$this->home();
	}

    public function home() {
		/*
		//var_dump($_POST);
		$name = $this->input->post('name');
		if(!$name || !$email || !$birthday || !isset($_POST['plan']) || !isset($_POST['zone'])
			|| $plan == "NA" || $zone == "NA" || $name == "" || $email == "" || $birthday == "") { // not enough info, DO NOT send email
			// DO NOTHING
			?>
			<?php
		}else { // send email
			if(isset($_POST['option']) && $option != "NA") {
				// keep $option intact
			}else { // no option
				$optionIndex = false;
			}
			$this->load->library('email');			
			// prepare mail content: load template -> replace data
			$this->load->library('parser');
			
			if($this->config->item('storeNAquotes')) {
				$this->insertQuoteRecordIntoDB($row);
			}
			
			$mailData = array(
			  'no_result_admin_note' => $noteToAdmin,
			  'option'			=> $optionStr
			);
			$mailContent = $this->parser->parse('template_quoteNotifyToAdmin', $mailData, TRUE);
			//var_dump($mailContent);
			
			//echo $this->email->print_debugger();
		}*/
	
		$data['currPage'] = "home";
		$data['pageTitle'] = "NewsBuddy - Home";
		//$data['selectCountries'] = $this->makeCountriesSelectBox();
		
        $this->load->view("view_home");
		/*
        $this->load->view("site_meta", $data);
        $this->load->view("site_header", $data);
        $this->load->view("content_home", $data);
        $this->load->view("site_footer", $data);
		*/
    }
	
	public function contact() {
		$name = $this->input->post('name');
		$email = $this->input->post('email');
		$subject = $this->input->post('subject');
		$company = $this->input->post('company');
		$mobile = $this->input->post('mobile');
		$phone = $this->input->post('phone');
		$message = $this->input->post('message');
		
		if(!$name || !$email || !$message) { // not enough info, DO NOT send email
			// DO NOTHING
		}else { // send email
			$this->load->library('email');

			$this->email->from($email, $name);
			$this->email->to($this->config->item('supportEmail')); 
			//$this->email->cc('another@another-example.com'); 
			//$this->email->bcc('them@their-example.com'); 
			
			$subjectStr = ($subject == "") ? "[Contact] A message from ".$name : "[Contact] ".$subject;
			$this->email->subject($subjectStr);
			
			// prepare mail content: load template -> replace data
			$this->load->library('parser');
			$mailData = array(
			  'message'   => $message,
			  'name'   => $name,
			  'company'   => $company,
			  'mobile'   => $mobile,
			  'phone'   => $phone
			);
			$mailContent = $this->parser->parse('template_contactform', $mailData, TRUE);
			$this->email->message($mailContent);
			
			$sendingOK = $this->email->send();
			if($sendingOK) {
				$data['sendingOK'] = 'ok';
			}else {
				$data['sendingOK'] = 'failed';
			}
			
			//echo $this->email->print_debugger();
		}
		
		$data['currPage'] = "contact";
		$data['pageTitle'] = "Medical Insurance - Contact";
		//$this->load->view("view_contact");
		$this->load->view("site_meta", $data);
        $this->load->view("site_header", $data);
        $this->load->view("content_contact", $data);
        $this->load->view("site_footer", $data);
	}
	
	public function insertQuoteRecordIntoDB($data) {
		$this->load->model("worker");
		return $this->worker->insertQuoteToDB($data);
	}

    public function about() {
		$data['currPage'] = "about";
		$data['pageTitle'] = "Medical Insurance - About us";
		$this->load->view("site_meta", $data);
        $this->load->view("site_header", $data);
        $this->load->view("content_about", $data);
        $this->load->view("site_footer", $data);
    }
	
	public function support() {
		$data['currPage'] = "support";
		$data['pageTitle'] = "Medical Insurance - Support";
		$this->load->view("site_meta", $data);
        $this->load->view("site_header", $data);
        $this->load->view("content_support", $data);
        $this->load->view("site_footer", $data);
    }
	
	public function makeCountriesSelectBox() {
		$this->load->model("worker");
		return $this->worker->renderCountries();
	}
}